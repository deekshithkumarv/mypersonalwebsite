import { Link } from "@remix-run/react";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Certs", href: "/#certifications" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <motion.header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass py-3"
            : "bg-transparent py-6"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden gradient-animate"
              style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' }}>
              <span className="font-display font-bold text-white text-sm tracking-tight">DK</span>
            </div>
            <span className="font-display font-bold text-lg text-text-primary dark:text-d-text-primary hidden sm:block group-hover:text-gradient transition-all duration-300">
              Deekshith<span className="text-gradient"> Kumar</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative px-4 py-2 text-sm font-medium text-text-secondary dark:text-d-text-secondary hover:text-primary dark:hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5 group"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-4 rounded-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))' }} />
              </Link>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
            <a
              href="/assets/Deekshith Resume.pdf"
              download
              className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold text-white shimmer transition-all duration-300 hover:shadow-glow-primary"
              style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' }}
            >
              Resume
            </a>
          </nav>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-text-primary dark:text-d-text-primary hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 z-40 md:hidden mx-4 mt-2"
          >
            <div className="glass rounded-2xl p-4 border"
              style={{ borderColor: 'var(--glass-border)' }}>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-text-primary dark:text-d-text-primary hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-2 pt-2" style={{ borderTop: '1px solid var(--section-divider)' }}>
                  <a
                    href="/assets/Deekshith Resume.pdf"
                    download
                    className="block px-4 py-3 text-center text-sm font-semibold text-white rounded-xl"
                    style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' }}
                  >
                    Download Resume
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
