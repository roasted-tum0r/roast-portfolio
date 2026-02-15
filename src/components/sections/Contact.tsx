import { useState } from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Github, Send } from 'lucide-react';
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
    const [formObject, setFormSubmission] = useState({
        Name: "",
        Email: "",
        Message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormSubmission((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);
        try {
            await fetch(
                "https://v1.nocodeapi.com/roastedtumor/google_sheets/CiCcXYKAWsnBEtVg?tabId=Sheet1",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify([[formObject.Name, formObject.Email, formObject.Message, new Date().toLocaleString()]]),
                }
            );

            const emailResponse = await emailjs.send(
                "service_4yg13kr",
                "template_3clu39h",
                {
                    from_name: formObject.Name,
                    to_name: "Anirban Samaddar",
                    message: formObject.Message,
                    reply_to: formObject.Email,
                    message_from_me: formObject.Name.toLowerCase().includes("shreyosi")
                        ? "I love you too my baby love <3"
                        : "Thanks for reaching out! I'll get back to you soon.",
                    to_email: formObject.Email,
                },
                "9AgPLQJTQvAsZfxBD"
            );

            if (emailResponse.status === 200) {
                toast.success("Message sent! I'll be in touch soon.", { theme: "dark" });
                setFormSubmission({ Name: "", Email: "", Message: "" });
            }
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        { icon: <Facebook size={20} />, href: "https://www.facebook.com/profile.php?id=100008096527920" },
        { icon: <Twitter size={20} />, href: "#header" },
        { icon: <Instagram size={20} />, href: "https://www.instagram.com/awwwneerbaan/" },
        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/anirban-samaddar-580173211" },
        { icon: <Github size={20} />, href: "https://github.com/roasted-tum0r" },
    ];

    return (
        <section id="contact" className="relative py-24 bg-transparent overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h2>
                    <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
                </div>
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="w-full lg:w-2/5">

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center space-x-4 text-white/70">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                    <Mail size={20} />
                                </div>
                                <span>anirbansamaddar07@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4 text-white/70">
                                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                                    <Phone size={20} />
                                </div>
                                <span>9038674245</span>
                            </div>
                        </div>

                        <div className="flex space-x-4 mb-12">
                            {socialLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>

                        <a
                            href="https://drive.google.com/uc?id=1U6pnUug66hl9XBeceJ7gNMY9Q31jDqT1"
                            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-400 hover:text-white transition-all transform hover:scale-105"
                        >
                            Download CV
                        </a>
                    </div>

                    <div className="w-full lg:w-3/5">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name="Name"
                                    value={formObject.Name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                />
                                <input
                                    type="email"
                                    name="Email"
                                    value={formObject.Email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <textarea
                                name="Message"
                                value={formObject.Message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows={6}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group flex items-center space-x-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all disabled:opacity-50"
                            >
                                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
