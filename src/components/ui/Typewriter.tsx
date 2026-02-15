import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export interface TypewriterProps {
    text: string;
    delay?: number;
    duration?: number;
    className?: string;
    onComplete?: () => void;
    hideCursorOnComplete?: boolean;
    prompt?: string;
    cursorStyle?: 'line' | 'block';
}

export default function Typewriter({
    text,
    delay = 0,
    duration = 2,
    className = "",
    onComplete,
    hideCursorOnComplete = false,
    prompt = "",
    cursorStyle = 'line'
}: TypewriterProps) {

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [isTyping, setIsTyping] = useState(false);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        const controls = animate(count, text.length, {
            duration: duration,
            delay: delay,
            ease: "linear",
            onUpdate: (latest) => {
                if (latest > 0 && !isTyping) setIsTyping(true);
            },
            onComplete: () => {
                setIsTyping(false);
                setIsDone(true);
                if (onComplete) onComplete();
            },
        });
        return controls.stop;
    }, [text, delay, duration, count, onComplete, isTyping]);



    const [currentText, setCurrentText] = useState("");

    useEffect(() => {
        return rounded.on("change", (latest) => {
            setCurrentText(text.slice(0, latest));
        });
    }, [rounded, text]);

    const renderWithLinks = (content: string) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const parts = [];
        let lastIndex = 0;
        let match;

        // Reset regex because of 'g' flag
        urlRegex.lastIndex = 0;

        while ((match = urlRegex.exec(text)) !== null) {
            const url = match[0];
            const urlStart = match.index;
            const urlEnd = urlStart + url.length;

            // Add text before the URL
            if (urlStart > lastIndex) {
                const beforeText = content.substring(lastIndex, Math.min(urlStart, content.length));
                if (beforeText) parts.push({ type: 'text', value: beforeText });
            }

            // Check if the URL is fully or partially typed
            if (content.length >= urlEnd) {
                // Fully typed - render as clickable link
                parts.push({ type: 'link', value: url });
            } else if (content.length > urlStart) {
                // Partially typed - render as plain text
                parts.push({ type: 'text', value: content.substring(urlStart) });
            }

            lastIndex = urlEnd;
        }

        // Add remaining text
        if (lastIndex < content.length) {
            parts.push({ type: 'text', value: content.substring(lastIndex) });
        }

        // Fallback for no matches
        if (parts.length === 0 && content) {
            parts.push({ type: 'text', value: content });
        }

        return parts.map((part, i) => (
            part.type === 'link' ? (
                <a
                    key={i}
                    href={part.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 hover:decoration-cyan-300 transition-all cursor-pointer relative z-10"
                >
                    {part.value}
                </a>
            ) : (
                <span key={i}>{part.value}</span>
            )
        ));
    };

    return (
        <span className={className}>
            {prompt && <span className="mr-2 opacity-50">$</span>}
            <motion.span>{renderWithLinks(currentText)}</motion.span>
            {(!isDone || !hideCursorOnComplete) && (
                <motion.span
                    variants={{
                        typing: { opacity: 1 },
                        blinking: {
                            opacity: [0, 0, 1, 1],

                            transition: {
                                duration: 1,
                                repeat: Infinity,
                                repeatDelay: 0,
                                ease: "linear",
                                times: [0, 0.5, 0.5, 1],
                            },
                        },
                    }}
                    animate={isTyping ? "typing" : "blinking"}
                    className={`inline-block ml-1 bg-current align-middle ${cursorStyle === 'block' ? 'w-[8px] h-[1.2em]' : 'w-[2px] h-[1em]'
                        }`}
                />
            )}
        </span>
    );

}
