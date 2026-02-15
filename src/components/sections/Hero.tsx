import { motion } from 'framer-motion';
import { useState } from 'react';
import Typewriter from '../ui/Typewriter';

const Hero = () => {
    const [titleDone, setTitleDone] = useState(false);

    return (
        <section id="header" className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent px-6">
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col items-center text-center pt-20">


                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <motion.div
                            initial={{ scale: 0, opacity: 0, y: 30 }}
                            animate={{ scale: 1.5, opacity: 1, y: 0, }}
                            transition={{ duration: 2, delay: 0.5 }}
                        >
                            <p className="text-blue-400 font-mono tracking-[0.1em] md:tracking-[0.3em] mb-4 text-[10px] md:text-sm uppercase whitespace-nowrap">Full Stack Development & Architecture</p>
                        </motion.div>
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8">
                            <span>Hi, I'm </span>
                            <Typewriter
                                text="Anirban Samaddar"
                                duration={1.5}
                                onComplete={() => setTitleDone(true)}
                                className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text"
                            />
                        </h1>

                        <div className="max-w-2xl text-base md:text-xl leading-relaxed mb-12 mx-auto min-h-[4em]">
                            {titleDone && (
                                <Typewriter
                                    text="Crafting high-performance digital experiences with a focus on immersive design and robust frontend engineering."
                                    duration={3}
                                    className="text-white/50"
                                />
                            )}
                        </div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: titleDone ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <a
                                href="#contact"
                                className="px-8 md:px-10 py-3 md:py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-500 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] text-sm md:text-base"
                            >
                                Get in touch
                            </a>
                            <a
                                href="#portfolio"
                                className="px-8 md:px-10 py-3 md:py-4 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-500 text-sm md:text-base"
                            >
                                View My Work
                            </a>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            <motion.div
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-white/20 text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Scroll</span>
                <div className="w-px h-8 md:h-12 bg-gradient-to-b from-blue-500 to-transparent opacity-30 md:opacity-50"></div>
            </motion.div>
        </section>
    );
};


export default Hero;
