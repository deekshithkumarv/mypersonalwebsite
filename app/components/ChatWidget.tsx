import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane, FaUser, FaCommentDots, FaCircleNotch } from "react-icons/fa";

type Message = {
    id: string;
    role: "user" | "ai";
    text: string;
};

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "ai",
            text: "Hi there! I'm Deekshith's AI assistant. Feel free to ask me anything about his experience, projects, or skills!",
        },
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isTyping, isOpen]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        const newUserMessage: Message = { id: Date.now().toString(), role: "user", text: userMsg };
        const newMessages = [...messages, newUserMessage];

        setMessages(newMessages);
        setInput("");
        setIsTyping(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });

            if (!res.ok) throw new Error("Network response was not ok");
            const data = await res.json();

            setMessages((prev) => [...prev, { id: Date.now().toString(), role: "ai", text: data.reply }]);
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages((prev) => [...prev, { id: Date.now().toString(), role: "ai", text: "I'm having trouble connecting right now. Please email Deekshith directly!" }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-20 right-0 w-[340px] md:w-[380px] h-[500px] max-h-[75vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden border"
                        style={{ background: 'var(--background-body)', borderColor: 'var(--card-border)' }}
                    >
                        {/* Header */}
                        <div
                            className="flex items-center justify-between px-5 py-4 text-white"
                            style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                    <FaRobot className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Deekshith's AI</h3>
                                    <div className="flex items-center gap-1.5 text-[10px] text-white/80 uppercase font-semibold tracking-wider">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Online
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-5 pb-2 scroll-smooth" style={{ background: 'var(--card-bg)' }}>
                            <div className="flex flex-col gap-4">
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                                    >
                                        <div
                                            className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center mt-1"
                                            style={{
                                                background: msg.role === 'ai' ? 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' : 'var(--section-divider)',
                                                color: msg.role === 'ai' ? '#fff' : 'var(--primary-color)'
                                            }}
                                        >
                                            {msg.role === 'ai' ? <FaRobot className="text-xs" /> : <FaUser className="text-xs" />}
                                        </div>
                                        <div
                                            className={`px-4 py-2.5 rounded-2xl text-sm max-w-[80%] leading-relaxed ${msg.role === "user"
                                                ? "rounded-tr-sm bg-primary/10 text-primary dark:text-d-text-primary border border-primary/20"
                                                : "rounded-tl-sm bg-gray-100 dark:bg-[#1a1c29] text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800"
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Typing Indicator */}
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex gap-3 flex-row"
                                    >
                                        <div
                                            className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center mt-1 text-white"
                                            style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' }}
                                        >
                                            <FaRobot className="text-xs" />
                                        </div>
                                        <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-gray-100 dark:bg-[#1a1c29] border border-gray-200 dark:border-gray-800 flex items-center gap-1">
                                            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                                            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                                            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white dark:bg-[#060812] border-t" style={{ borderColor: 'var(--card-border)' }}>
                            <form
                                onSubmit={handleSend}
                                className="flex items-center gap-2"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask me anything..."
                                    className="flex-1 bg-gray-100 dark:bg-[#1a1c29] border-transparent focus:border-primary focus:ring-0 rounded-xl px-4 py-3 text-sm text-text-primary dark:text-d-text-primary outline-none transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isTyping}
                                    className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl text-white transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                                    style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' }}
                                >
                                    <FaPaperPlane className="text-sm -ml-0.5" />
                                </button>
                            </form>
                            <div className="text-center mt-3">
                                <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium tracking-wide">
                                    Powered by React & Custom Logic
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full text-white shadow-card-hover shimmer z-50"
                style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaTimes className="text-2xl" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaCommentDots className="text-2xl" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
