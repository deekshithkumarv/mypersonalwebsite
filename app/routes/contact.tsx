import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "vdeekshithkumar@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
      {/* Background blobs */}
      <div className="mesh-blob-1 w-[500px] h-[500px] top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 text-center max-w-2xl"
      >
        <span className="section-label mb-6 inline-flex">Contact</span>

        <h1 className="text-4xl md:text-5xl font-display font-bold mt-6 mb-6">
          Let's <span className="text-gradient">Work Together</span>
        </h1>

        <p className="text-text-secondary dark:text-d-text-secondary text-lg mb-10 leading-relaxed">
          Have a project in mind, want to collaborate, or just want to say hi?
          I'd love to hear from you — reach out via email or connect on social media.
        </p>

        {/* Contact card */}
        <div className="gradient-border p-8 md:p-10 shadow-card-hover text-left">
          {/* Email copy row */}
          <div className="flex items-center justify-between gap-4 p-4 rounded-xl mb-5"
            style={{ background: 'var(--section-divider)' }}>
            <div className="flex items-center gap-3 text-sm md:text-base font-medium text-text-primary dark:text-d-text-primary overflow-hidden">
              <FaEnvelope className="text-primary shrink-0" />
              <span className="truncate">{email}</span>
            </div>
            <button
              onClick={handleCopy}
              className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:bg-primary/10 text-primary"
            >
              {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <a
            href={`mailto:${email}`}
            className="w-full flex items-center justify-center gap-3 px-8 py-4 text-white font-bold text-lg rounded-xl shimmer transition-all duration-300 hover:shadow-[0_0_40px_rgba(108,62,244,0.4)] hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' }}
          >
            <FaEnvelope />
            Send a Message
          </a>

          <div className="flex justify-center items-center gap-5 mt-8 pt-6"
            style={{ borderTop: '1px solid var(--section-divider)' }}>
            <a
              href="https://github.com/deekshithkumarv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-text-secondary dark:text-d-text-secondary hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaGithub className="text-lg" /> GitHub
            </a>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
            <a
              href="https://www.linkedin.com/in/deekshith-kumar-v-44a08321a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-text-secondary dark:text-d-text-secondary hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaLinkedin className="text-lg" /> LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
