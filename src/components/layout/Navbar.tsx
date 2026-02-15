import { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#header' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
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
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-white/80 hover:text-white transition-colors duration-300 text-sm uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
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

            <div className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
                <ul className="flex flex-col items-center py-6 space-y-4">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white/80 hover:text-white transition-colors duration-300 text-lg uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
