import { motion } from 'framer-motion';
import { ExternalLink, Github, GitBranch, Star, Terminal } from 'lucide-react';
import { useGitHubData, type Repository } from '../../hooks/useGitHubData';

const Projects = () => {
    const { repos, languages, loading, page, nextPage, prevPage } = useGitHubData(3);

    const featuredProjects = [
        {
            title: "Anandini's Exotica",
            desc: 'High-end E-commerce engine architected with a production-first mindset. Featuring complex state management and RESTful backend architecture.',
            link: 'https://anandini-exotica.vercel.app/',
            tags: ['React 19', 'Node.js', 'Redis', 'MUI'],
            status: 'In Development'
        },
        {
            title: 'Open Sesame-Mail',
            desc: 'Production-grade Chrome Extension automating professional email workflows. Successfully deployed on Chrome Web Store with active users.',
            link: 'https://sesame-mail.vercel.app/welcome',
            tags: ['React', 'Tailwind CSS', 'Extension API', 'Automation', 'Vite'],
            status: 'Production'
        }
    ];

    const languageColors: { [key: string]: string } = {
        TypeScript: '#3178c6',
        JavaScript: '#f1e05a',
        CSS: '#563d7c',
        HTML: '#e34c26',
        SCSS: '#c6538c',
        Python: '#3572A5'
    };

    return (
        <section id="portfolio" className="py-24 bg-transparent overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight relative inline-block">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mt-4"></div>
                </div>

                {/* featured projects */}
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-32">
                    {featuredProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative rounded-3xl overflow-hidden min-h-[400px] md:aspect-[16/10] bg-[#050505] border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-end p-6 md:p-12"
                        >
                            {/* Terminal-style visual mockup instead of image */}
                            <div className="absolute inset-0 opacity-10 md:opacity-20 pointer-events-none overflow-hidden">
                                <div className="absolute top-4 left-4 flex space-x-1.5 z-20">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="p-6 md:p-12 font-mono text-[8px] md:text-[10px] text-blue-400 leading-relaxed h-full">
                                    <div className="animate-pulse">
                                        {`> INITIALIZING ${project.title.toUpperCase()}...`}
                                        <br />
                                        <span className="hidden md:inline">{`> LOADING CORE_MODULES...`}</span>
                                        <br className="hidden md:inline" />
                                        {`> CACHE_STATUS: VALID`}
                                        <br />
                                        {`> READY FOR EXECUTION...`}
                                    </div>
                                    <div className="opacity-10 mt-4 space-y-1">
                                        {[...Array(10)].map((_, i) => (
                                            <div key={i} className="flex space-x-2">
                                                <div className="w-6 md:w-12 h-1 bg-white/20"></div>
                                                <div className="w-16 md:w-32 h-1 bg-white/10"></div>
                                                <div className="w-10 md:w-20 h-1 bg-white/5"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent pointer-events-none"></div>
                            </div>

                            <div className="relative z-10 w-full">
                                <div className="flex items-center space-x-2 mb-3 md:mb-4">
                                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded-full">{project.status}</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 tracking-tight">{project.title}</h3>
                                <p className="text-white/60 mb-6 md:mb-8 text-sm md:text-base leading-relaxed max-w-lg">{project.desc}</p>
                                <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[9px] md:text-[10px] font-mono text-white/40 bg-white/5 px-2 py-1 rounded border border-white/10 uppercase">{tag}</span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-3 text-white font-bold hover:text-blue-400 transition-colors uppercase tracking-widest text-[10px] md:text-xs"
                                >
                                    <span>Execute System</span>
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Git Activity & Language Footprint */}
                <div className="grid lg:grid-cols-3 gap-16 items-start">
                    {/* Language proficiency footprint */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10"><Terminal size={60} /></div>
                            <h3 className="text-xl font-black text-white mb-8 tracking-tighter pascalcase flex items-center space-x-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                                <span>Code Footprint</span>
                            </h3>

                            {/* Language bar */}
                            <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden flex mb-8">
                                {(Object.entries(languages) as [string, number][]).map(([lang, percent], i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${percent}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="h-full"
                                        style={{ backgroundColor: languageColors[lang] || '#888' }}
                                    />
                                ))}
                            </div>

                            {/* Legend */}
                            <div className="grid grid-cols-2 gap-4">
                                {(Object.entries(languages) as [string, number][]).map(([lang, percent], i) => (
                                    <div key={i} className="flex items-center space-x-3 group/item">
                                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: languageColors[lang] || '#888' }}></div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-mono text-white/40 uppercase group-hover/item:text-white/60 transition-colors">{lang}</span>
                                            <span className="text-xs font-bold text-white/80">{percent}%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 text-[10px] font-mono text-white/20 italic">
                                // Aggregated from 10+ core repositories
                            </div>
                        </div>
                    </div>

                    {/* Repository Feed */}
                    <div className="lg:col-span-2">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                            <h3 className="text-xl font-black text-white tracking-tighter pascalcase flex items-center space-x-3">
                                <Github size={20} className="text-blue-400" />
                                <span>Live Repository Feed - GitHub</span>
                            </h3>
                            <div className="flex items-center space-x-2 bg-white/5 p-1 rounded-xl border border-white/10">
                                <button
                                    onClick={prevPage}
                                    disabled={loading || page === 1}
                                    className="px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                                >
                                    Prev
                                </button>
                                <span className="text-[10px] font-mono text-blue-400 px-2">PG_{page.toString().padStart(2, '0')}</span>
                                <button
                                    onClick={nextPage}
                                    disabled={loading || (repos && repos.length < 3)}
                                    className="px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                                >
                                    Next
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {loading ? (
                                [1, 2, 3].map(i => (
                                    <div key={i} className="h-40 w-full bg-white/5 animate-pulse rounded-2xl border border-white/10"></div>
                                ))
                            ) : (
                                repos && repos.map((repo: Repository, i: number) => (
                                    <motion.a
                                        key={`${page}-${i}`}
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="block p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all group overflow-hidden relative"
                                    >
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/0 group-hover:bg-blue-500/50 transition-all"></div>
                                        <div className="flex justify-between items-start mb-3">
                                            <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex items-center space-x-2">
                                                <GitBranch size={16} className="text-white/20" />
                                                <span>{repo.name}</span>
                                            </h4>
                                            <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-white/30 text-[9px] font-mono mt-1">
                                                <div className="flex items-center space-x-1">
                                                    <Star size={10} />
                                                    <span>{repo.stargazers_count}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" /><path d="M12 12v3" /></svg>
                                                    <span>{repo.forks_count}</span>
                                                </div>
                                                <span className="hidden sm:inline bg-white/5 px-2 py-0.5 rounded border border-white/5 uppercase">{repo.language}</span>
                                                <span className="opacity-40">{new Date(repo.updated_at).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                        <p className="text-white/40 text-sm line-clamp-2 leading-relaxed mb-4">
                                            {repo.description || 'No description provided for this system architecture module.'}
                                        </p>
                                        <div className="flex items-center space-x-2 text-blue-500/40 group-hover:text-blue-500 transition-colors text-[10px] font-mono uppercase tracking-widest">
                                            <span>Access Repository</span>
                                            <ExternalLink size={10} />
                                        </div>
                                    </motion.a>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
