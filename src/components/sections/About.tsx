import { useState } from 'react';
import logoUser from "../../images/user.jpg";
import { motion } from 'framer-motion';
import Typewriter from '../ui/Typewriter';


const About = () => {
    const [activeTab, setActiveTab] = useState('skills');
    const [expType, setExpType] = useState<'professional' | 'personal'>('professional');

    const tabs = [
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
    ];

    const content = {
        skills: [
            {
                label: 'Modern Frontend Engineering',
                shortLabel: 'Frontend',
                value: 85,
                desc: 'Expertise in React 19, TypeScript, and Vite architecting high-performance Single Page Applications (SPA) with MUI/DataGrid.'
            },
            {
                label: 'State Management & Saga',
                shortLabel: 'Redux/Saga',
                value: 90,
                desc: 'Advanced proficiency in Redux Toolkit and Redux Saga for handling complex, asynchronous application states.'
            },
            {
                label: 'Backend & RESTful APIs',
                shortLabel: 'Node/API',
                value: 65,
                desc: 'Designing robust REST APIs with Node.js, Express, and high-performance persistent caching layers using Redis.'
            },
            {
                label: 'Cloud & Infrastructure',
                shortLabel: 'Cloud/AWS',
                value: 40,
                desc: 'Integrating AWS S3, SQS, and third-party services like Google Maps and reCAPTCHA into scalable workflows.'
            },
            {
                label: 'QA & Network Debugging',
                shortLabel: 'QA/Debug',
                value: 75,
                desc: 'Expert-level debugging using Chrome DevTools and network inspection to ensure production-level code quality.'
            },
            {
                label: 'System Architecture',
                shortLabel: 'Arch/Design',
                value: 35,
                desc: 'Specializing in legacy refactoring, component-driven design, and building scalable system architectures for modern products.'
            },
        ],
        experience: {
            professional: [
                {
                    company: 'ARC Document Solutions',
                    role: 'Software Engineer',
                    period: 'July 2023 - Currently Employed',
                    projects: [
                        {
                            name: 'Skysite Projects (In Production)',
                            highlights: [
                                'Developed 5+ production modules, leading a security-driven migration from CRA to Vite.',
                                'Upgraded entire stack from React 18 to React 19 with TypeScript.',
                                'Currently architecting a legacy recursive tree optimization using lazy loading and pagination for improved user experience.'
                            ]
                        },
                        {
                            name: 'iShipDocs Support Dashboard (In Production)',
                            highlights: [
                                'Developed a responsive internal dashboard that reduced developer intervention by 60%.',
                                'Engineered component-driven architecture using reusable UI components, improving dev speed by 5%.',
                                'Created a smart responsive rendering system for MUI X DataGrid and card-based layouts.'
                            ]
                        },
                        {
                            name: 'Skysite Archives 2.0 (In Development)',
                            highlights: [
                                'Designed and implemented robust backend APIs supporting conditional data fetching and SQS message invocation.',
                                'Worked extensively with Redis for caching and performance optimization.',
                                'Resolved 30+ critical items in legacy backend environments within two weeks.',
                                'Led frontend stabilization efforts by refactoring abandoned UI modules and implementing AWS SDK-based uploads.'
                            ]
                        },
                    ]
                }
            ],
            personal: [
                {
                    company: 'Open Sesame-Mail',
                    role: 'Chrome Extension (Production)',
                    projects: [
                        {
                            name: 'Workflow Optimization Tool',
                            highlights: [
                                'A specialized Chrome extension designed to optimize and automate professional email workflows.',
                                'Available on the Chrome Web Store with active users and ongoing feature updates.',
                                'Landing Page: https://sesame-mail.vercel.app/welcome',
                                'Webstore: https://chromewebstore.google.com/detail/open-sesame-mail/lmmkennfkdipenjicgdajinapippelbo'
                            ]
                        }
                    ]
                },
                {
                    company: "Anandini's Exotica",
                    role: 'Full Stack E-commerce (In Development)',
                    projects: [
                        {
                            name: 'E-commerce Engine',
                            highlights: [
                                'Independently architected the entire database schema, RESTful APIs, and frontend UI.',
                                'Implementing a modern shopping experience with custom state management and responsive design.',
                                'Currently in development with a focus on performance and seamless checkout flows.'
                            ]
                        }
                    ]
                },
                {
                    company: 'Full Stack Social Media',
                    role: 'MERN Project',
                    projects: [
                        {
                            name: 'Social Interaction Platform',
                            highlights: [
                                'Built a comprehensive social media application using Node.js, Express, and MongoDB.',
                                'Implemented real-time features and complex data relations for user interactions.',
                                'Designed a responsive React frontend with multi-page navigation and state persistence.'
                            ]
                        }
                    ]
                }
            ]
        },
        education: [
            {
                institution: 'Future Institute of Technology',
                degree: 'Bachelor of Technology in Computer Science and Engineering',
                period: '2019 - 2023',
                score: '9.04 / 10',
                scoreType: 'DGPA',
                scoreFull: 'Degree Grade Point Average'
            },
            {
                institution: 'National High School',
                degree: 'Senior Secondary Education (Class XII)',
                period: '2017 - 2019',
                score: '69.7%',
                scoreType: 'Percentage'
            },
            {
                institution: 'BDM International',
                degree: 'Secondary Education (Class X)',
                period: '2015 - 2017',
                score: '81.7%',
                scoreType: 'Percentage'
            },
        ],
    };

    return (
        <section id="about" className="py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="w-full lg:w-1/3 sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative rounded-2xl overflow-hidden glass-card group"
                        >
                            <img src={logoUser} alt="About Me" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                            <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-2/3">
                        <div className="text-center lg:text-left mb-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
                            <div className="w-20 h-1.5 bg-blue-500 rounded-full mx-auto lg:mx-0"></div>
                        </div>
                        <p className="text-white/70 leading-relaxed mb-10 text-lg text-center lg:text-left">
                            I’m <span className="text-blue-400 font-bold">Anirban Samaddar</span>, a Software Engineer at <span className="text-white font-semibold underline decoration-blue-500/30 underline-offset-4">ARC Document Solutions</span> dedicated to architecting high-performance web ecosystems.
                            Across nearly 3 years of professional experience, I’ve specialized in bridging the gap between pixel-perfect frontend engineering (<span className="text-blue-300">React/Vite</span>) and scalable backend infrastructure (<span className="text-blue-300">Node.js/AWS</span>).
                            I thrive on the high-stakes challenge of refactoring legacy systems into modern, elite-level products that are built to scale.
                        </p>


                        <div className="flex space-x-8 border-b border-white/10 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`pb-4 text-sm pascalcase tracking-widest transition-all duration-300 relative font-bold ${activeTab === tab.id ? 'text-blue-400' : 'text-white/40 hover:text-white/60'
                                        }`}
                                >
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)]"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="min-h-[400px]">
                            {activeTab === 'experience' ? (
                                <div className="space-y-8">
                                    <div className="flex space-x-4 mb-10 p-1 bg-white/5 rounded-lg w-fit mx-auto lg:mx-0">
                                        <button
                                            onClick={() => setExpType('professional')}
                                            className={`px-6 py-2 rounded-md text-sm font-bold transition-all duration-300 ${expType === 'professional' ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'text-white/40 hover:text-white/60'}`}
                                        >
                                            Professional
                                        </button>
                                        <button
                                            onClick={() => setExpType('personal')}
                                            className={`px-6 py-2 rounded-md text-sm font-bold transition-all duration-300 ${expType === 'personal' ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'text-white/40 hover:text-white/60'}`}
                                        >
                                            Personal
                                        </button>
                                    </div>
                                    <ExperienceTimeline key={expType} data={content.experience[expType]} />
                                </div>
                            ) : activeTab === 'skills' ? (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div className="order-2 lg:order-1 space-y-6">
                                        {content.skills.map((skill: any, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all"
                                            >
                                                <h3 className="text-blue-400 font-bold text-lg mb-1 group-hover:translate-x-1 transition-transform">{skill.label}</h3>
                                                <p className="text-white/60 text-sm leading-relaxed">{skill.desc}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="order-1 lg:order-2 flex justify-center">
                                        <RadarChart data={content.skills} />
                                    </div>
                                </div>
                            ) : activeTab === 'education' ? (
                                <EducationTimeline data={content.education} />
                            ) : (
                                <motion.ul
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-8"
                                >
                                    {(content[activeTab as keyof typeof content] as any[]).map((item, idx) => (
                                        <li key={idx} className="group">
                                            <span className="text-blue-400 font-bold text-xl mb-2 block group-hover:translate-x-1 transition-transform">{item.title}</span>
                                            <p className="text-white/60 leading-relaxed text-lg">{item.desc}</p>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const EducationTimeline = ({ data }: { data: any[] }) => {
    return (
        <div className="space-y-10">
            {data.map((edu, idx) => (
                <div key={idx} className="relative pl-10 border-l-2 border-white/5 pb-10 last:pb-0">
                    <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#0a0a0a] border-2 border-blue-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                    </div>
                    <div className="group">
                        <span className="text-blue-500/60 font-mono text-xs mb-2 block tracking-widest">{edu.period}</span>
                        <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">{edu.institution}</h3>
                        <p className="text-white/60 text-lg mb-4">{edu.degree}</p>

                        <div className="inline-flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-lg border border-white/10 group-hover:border-blue-500/30 transition-all">
                            <span className="text-white/40 text-sm">{edu.scoreType}:</span>
                            <div className="relative group/tooltip">
                                <span className={`text-blue-400 font-bold ${edu.scoreType === 'DGPA' ? 'cursor-help' : ''}`}>
                                    {edu.score}
                                </span>
                                {edu.scoreFull && (
                                    <div className="absolute left-1/2 -translate-x-1/2 -top-10 px-3 py-1 bg-blue-600 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                                        {edu.scoreFull}
                                        <div className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-blue-600"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ExperienceTimeline = ({ data }: { data: any[] }) => {
    return (
        <div className="space-y-12">
            {data.map((job, idx) => (job.projects ? (
                <div key={idx} className="relative pl-8 border-l-2 border-white/10">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    <div className="mb-8">
                        <h3 className="text-2xl font-black text-white mb-2">{job.company}</h3>
                        <p className="text-blue-400 font-mono text-sm pascalcase tracking-widest mb-6">{job.role}</p>

                        <div className="space-y-10">
                            {job.projects.map((project: any, pIdx: number) => (
                                <div key={pIdx} className="group">
                                    <h4 className="text-white/90 font-bold text-lg mb-4 flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-blue-500/50 mr-3"></span>
                                        {project.name}
                                    </h4>
                                    <SequentialTerminal highlights={project.highlights} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : null))}
        </div>
    );
};

const SequentialTerminal = ({ highlights }: { highlights: string[] }) => {
    const [activeLine, setActiveLine] = useState(0);

    return (
        <div className="space-y-3 bg-white/5 p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 box-border">
            {highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-start text-white/60 font-mono text-sm leading-relaxed min-h-[1.5em]">
                    {hIdx <= activeLine && (
                        <Typewriter
                            text={highlight}
                            duration={1.5}
                            delay={0.4}
                            prompt="$"
                            cursorStyle="block"
                            className="w-full"
                            onComplete={() => {
                                if (hIdx === activeLine && activeLine < highlights.length - 1) {
                                    setActiveLine(prev => prev + 1);
                                }
                            }}
                            hideCursorOnComplete={hIdx !== highlights.length - 1}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};


const RadarChart = ({ data }: { data: any[] }) => {
    const size = 420;
    const center = size / 2;
    const radius = size * 0.35; // Smaller radius relative to size for label space
    const angleStep = (Math.PI * 2) / data.length;

    // Generate path for the skill polygon
    const points = data.map((skill, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const x = center + radius * (skill.value / 100) * Math.cos(angle);
        const y = center + radius * (skill.value / 100) * Math.sin(angle);
        return `${x},${y}`;
    }).join(" ");

    // Generate background circles (grid)
    const gridLines = [0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => {
        const gridPoints = data.map((_, j) => {
            const angle = j * angleStep - Math.PI / 2;
            const x = center + radius * scale * Math.cos(angle);
            const y = center + radius * scale * Math.sin(angle);
            return `${x},${y}`;
        }).join(" ");
        return <polygon key={i} points={gridPoints} fill="none" stroke="white" strokeOpacity="0.05" />;
    });

    // Generate axis lines and labels
    const axes = data.map((skill, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const x2 = center + radius * Math.cos(angle);
        const y2 = center + radius * Math.sin(angle);

        // Dynamic label distance for multi-word labels
        const labelDistance = radius + 35;
        const lx = center + labelDistance * Math.cos(angle);
        const ly = center + labelDistance * Math.sin(angle);

        return (
            <g key={i}>
                <line x1={center} y1={center} x2={x2} y2={y2} stroke="white" strokeOpacity="0.1" />
                <text
                    x={lx}
                    y={ly}
                    fill="white"
                    fillOpacity="0.6"
                    fontSize="11"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-mono font-bold tracking-wider"
                >
                    {skill.shortLabel || skill.label}
                </text>
            </g>
        );
    });

    return (
        <div className="relative scale-75 md:scale-100">
            <svg width={size} height={size} className="drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                {/* Background Grid */}
                {gridLines}
                {axes}

                {/* Skill Polygon */}
                <motion.polygon
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    points={points}
                    fill="rgba(59, 130, 246, 0.25)"
                    stroke="#3b82f6"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    className="transition-all duration-700"
                />

                {/* Vertices */}
                {data.map((skill, i) => {
                    const angle = i * angleStep - Math.PI / 2;
                    const x = center + radius * (skill.value / 100) * Math.cos(angle);
                    const y = center + radius * (skill.value / 100) * Math.sin(angle);
                    return (
                        <motion.circle
                            key={i}
                            initial={{ r: 0 }}
                            animate={{ r: 4 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            cx={x}
                            cy={y}
                            fill="#60a5fa"
                            className="shadow-[0_0_15px_rgba(59,130,246,1)]"
                        />
                    );
                })}
            </svg>

            {/* Center core pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(59,130,246,1)]" />
        </div>
    );
};

export default About;
