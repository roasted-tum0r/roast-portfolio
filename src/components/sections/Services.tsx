import { motion } from 'framer-motion';
import { Code, Crop, Bot } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Code size={40} className="text-blue-400" />,
            title: 'Modern Frontend Architecture',
            desc: 'Building high-performance, scalable SPAs using React 19, TypeScript, and Vite. Specializing in component-driven design systems and security-driven framework migrations.'
        },
        {
            icon: <Bot size={40} className="text-purple-400" />,
            title: 'System Architecture & APIs',
            desc: 'Designing robust RESTful architectures with Node.js and persistent caching layers. Architecting scalable backends with AWS SQS and S3 integration for distributed systems.'
        },
        {
            icon: <Crop size={40} className="text-green-400" />,
            title: 'Legacy Modernization',
            desc: 'Transforming monolithic and legacy codebases into modern, elite-level products. Expert at refactoring complex logic, optimizing performance, and stabilization for production.'
        }
    ];

    return (
        <section id="services" className="py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Engineering Capabilities</h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors pascalcase tracking-tight">{service.title}</h3>
                            <p className="text-white/50 leading-relaxed mb-6 font-medium">
                                {service.desc}
                            </p>
                            <div className="flex items-center space-x-2 text-blue-400 font-bold pascalcase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 text-[10px] md:text-sm">
                                <span>Learn More</span>
                                <span className="w-8 h-px bg-blue-400"></span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
