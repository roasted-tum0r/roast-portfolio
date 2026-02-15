import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#header' },
        { name: 'About', href: '#about' },
        {
            name: 'GitHub',
            href: '#portfolio',
            dropdown: [
                { name: 'Footprint', href: '#footprint' },
                { name: 'Repo Feed', href: '#repo-feed' },
            ]
        },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#header" className="group">
                    <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
                        Anirban <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-blue-400 transition-all duration-500">Samaddar</span>
                    </span>
                </a>


                <ul className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <li key={link.name} className="relative group/nav">
                            {link.dropdown ? (
                                <div
                                    className="relative"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <button
                                        className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors duration-300 text-sm uppercase tracking-widest font-bold"
                                    >
                                        <span>{link.name}</span>
                                        <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-50 py-2"
                                            >
                                                {link.dropdown.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block px-6 py-3 text-[10px] font-mono font-bold uppercase tracking-widest text-white/40 hover:text-blue-400 hover:bg-white/5 transition-all"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <a
                                    href={link.href}
                                    className="text-white/80 hover:text-white transition-colors duration-300 text-sm uppercase tracking-widest font-bold"
                                >
                                    {link.name}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div className={`md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/5 z-[60] transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 py-10' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <ul className="flex flex-col items-center space-y-8 px-6">
                    {navLinks.map((link) => (
                        <li key={link.name} className="w-full text-center">
                            {link.dropdown ? (
                                <div className="space-y-4">
                                    <span className="text-blue-400/60 text-[10px] font-mono uppercase tracking-[0.2em] font-bold block mb-2">GitHub Hub</span>
                                    {link.dropdown.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block text-white/80 hover:text-white transition-colors duration-300 text-lg uppercase tracking-widest font-bold mb-4"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                    <div className="w-10 h-px bg-white/10 mx-auto"></div>
                                </div>
                            ) : (
                                <a
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-white/80 hover:text-white transition-colors duration-300 text-lg uppercase tracking-widest font-bold"
                                >
                                    {link.name}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
