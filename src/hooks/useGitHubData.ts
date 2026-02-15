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

export const useGitHubData = (perPage = 3) => {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [languages, setLanguages] = useState<LanguageStats>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);

    // Fetch language stats once
    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
                if (!res.ok) throw new Error('Failed to fetch stats');
                const data: Repository[] = await res.json();

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
            } catch (err: any) {
                console.error('Lang fetch error:', err.message);
            }
        };
        fetchLanguages();
    }, []);

    // Fetch repos when page changes
    useEffect(() => {
        const fetchRepos = async () => {
            setLoading(true);
            try {
                const reposRes = await fetch(
                    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${perPage}&page=${page}`
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
        loading,
        error,
        page,
        setPage,
        nextPage: () => setPage(p => p + 1),
        prevPage: () => setPage(p => Math.max(1, p - 1))
    };
};
