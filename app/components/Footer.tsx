import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: FaGithub, href: "https://github.com/deekshithkumarv", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/deekshith-kumar-v-44a08321a/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:vdeekshithkumar@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative py-10 overflow-hidden">
      {/* Top gradient separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, var(--primary-color) 30%, var(--secondary-color) 70%, transparent 100%)',
          opacity: 0.3,
        }}
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-display font-bold text-lg text-gradient">Deekshith Kumar V</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-text-secondary dark:text-d-text-secondary hover:text-primary transition-colors duration-200"
                style={{ background: 'var(--section-divider)' }}
              >
                <Icon className="text-lg" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-text-secondary dark:text-d-text-secondary">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
