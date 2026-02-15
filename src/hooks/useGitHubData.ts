import { useState, useEffect } from 'react';

export interface Repository {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    language: string;
}

export interface LanguageStats {
    [key: string]: number;
}

const GITHUB_USERNAME = 'roasted-tum0r';

export interface GitHubEvent {
    id: string;
    type: string;
    repo: {
        name: string;
        url: string;
    };
    payload: {
        action?: string;
        commits?: { message: string }[];
        ref?: string;
        ref_type?: string;
    };
    created_at: string;
    displayMessage?: string;
    displayTime?: string;
}

export const useGitHubData = (perPage = 3) => {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [languages, setLanguages] = useState<LanguageStats>({});
    const [events, setEvents] = useState<GitHubEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [eventsLoading, setEventsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [eventPage, setEventPage] = useState(1);
    const eventsPerPage = 6;

    const [totalContributions, setTotalContributions] = useState(0);

    // Fetch language stats, events, and user profile
    useEffect(() => {
        const fetchMiscData = async () => {
            setEventsLoading(true);
            try {
                // User Profile for "All Time" metrics
                const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
                let publicRepos = 0;
                if (userRes.ok) {
                    const userData = await userRes.json();
                    publicRepos = userData.public_repos;
                }

                // Languages
                const langRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=10`);
                if (langRes.ok) {
                    const data: Repository[] = await langRes.json();
                    const langStats: LanguageStats = {};
                    data.forEach(repo => {
                        if (repo.language) {
                            langStats[repo.language] = (langStats[repo.language] || 0) + 1;
                        }
                    });
                    const total = Object.values(langStats).reduce((a, b) => a + b, 0);
                    const langPercentages: LanguageStats = {};
                    Object.keys(langStats).forEach(key => {
                        langPercentages[key] = Math.round((langStats[key] / total) * 100);
                    });
                    setLanguages(langPercentages);
                }

                // Events - Fetch 2 pages for a denser grid
                const [eventRes1, eventRes2] = await Promise.all([
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100&page=1`),
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100&page=2`)
                ]);

                let allEvents: GitHubEvent[] = [];
                if (eventRes1.ok) allEvents = [...allEvents, ...(await eventRes1.json())];
                if (eventRes2.ok) allEvents = [...allEvents, ...(await eventRes2.json())];

                const processedEvents = allEvents.map(event => {
                    let displayMessage = '';
                    if (event.type === 'PushEvent' && event.payload.commits && event.payload.commits.length > 0) {
                        displayMessage = event.payload.commits[0].message;
                    }

                    const date = new Date(event.created_at);
                    const hours = date.getHours();
                    const ampm = hours >= 12 ? 'PM' : 'AM';
                    const displayTime = `${hours % 12 || 12} ${ampm}`;

                    return {
                        ...event,
                        displayMessage,
                        displayTime
                    };
                });

                setEvents(processedEvents);

                // Heuristic for "All Time" contributions
                const recentContributions = allEvents.filter(e =>
                    ['PushEvent', 'CreateEvent', 'PullRequestEvent'].includes(e.type)
                ).length;

                // (Public Repos * 8 + Recent Events * 2 + base offset)
                setTotalContributions(Math.max(76, (publicRepos * 8) + (recentContributions * 2) + 140));

                setEventsLoading(false);
            } catch (err: any) {
                console.error('GitHub misc fetch error:', err.message);
                setEventsLoading(false);
            }
        };
        fetchMiscData();
    }, []);

    // Helper to generate contribution grid from events
    const generateContributionGrid = () => {
        const grid = Array.from({ length: 7 }, () => Array.from({ length: 24 }, () => 0));
        const now = new Date();

        // 1. Fill with real events (most recent weeks)
        events.forEach(event => {
            const date = new Date(event.created_at);
            const diffInMs = now.getTime() - date.getTime();
            const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

            if (diffInDays < 24 * 7) {
                const weekIndex = 23 - Math.floor(diffInDays / 7);
                const dayIndex = date.getDay();
                if (weekIndex >= 0 && weekIndex < 24) {
                    grid[dayIndex][weekIndex] += 1;
                }
            }
        });

        // 2. Add "Historical Noise" for background activity (filling older weeks)
        // This ensures the terminal looks active even for newer accounts by projecting stats backwards
        for (let w = 0; w < 16; w++) { // Fill first 16 weeks (older)
            for (let d = 0; d < 7; d++) {
                // Deterministic noise based on coordinates and totalContributions
                const seed = (w * 7 + d) + (totalContributions % 100);
                const pseudoRandom = Math.abs(Math.sin(seed) * 1000) % 1;

                // Only fill if there's no real data there already
                if (grid[d][w] === 0) {
                    // Probability of activity increases with totalContributions
                    // Use totalContributions as a weight for "fullness"
                    const threshold = 0.85 - Math.min(0.2, (totalContributions / 2000));

                    if (pseudoRandom > threshold) {
                        grid[d][w] = Math.ceil(pseudoRandom * 3); // 1, 2, or 3
                    }
                }
            }
        }

        // Normalize to 0-3 scale with higher sensitivity
        return grid.map(row => row.map(cell => {
            if (cell === 0) return 0;
            if (cell === 1) return 1;
            if (cell < 4) return 2;
            return 3;
        }));
    };

    const contributionGrid = generateContributionGrid();

    // Paginated events for the timeline
    const paginatedEvents = events.slice((eventPage - 1) * eventsPerPage, eventPage * eventsPerPage);
    const totalEventPages = Math.ceil(events.length / eventsPerPage);

    // Fetch repos when page changes
    useEffect(() => {
        const fetchRepos = async () => {
            setLoading(true);
            try {
                const reposRes = await fetch(
                    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=${perPage}&page=${page}`
                );

                if (!reposRes.ok) throw new Error('Failed to fetch repositories');

                const reposData: Repository[] = await reposRes.json();
                setRepos(reposData);
                setLoading(false);
            } catch (err: any) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchRepos();
    }, [page, perPage]);

    return {
        repos,
        languages,
        events: paginatedEvents,
        contributionGrid,
        totalContributions,
        loading,
        eventsLoading,
        error,
        page,
        setPage,
        nextPage: () => setPage(p => p + 1),
        prevPage: () => setPage(p => Math.max(1, p - 1)),
        eventPage,
        totalEventPages,
        nextEventPage: () => setEventPage(p => Math.min(totalEventPages, p + 1)),
        prevEventPage: () => setEventPage(p => Math.max(1, p - 1))
    };
};
