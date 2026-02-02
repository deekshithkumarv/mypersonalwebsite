import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background dark:bg-d-background border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-secondary dark:text-d-text-secondary text-sm">
          &copy; {currentYear} Deekshith Kumar V. All Rights Reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/deekshithkumarv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary dark:text-d-text-secondary dark:hover:text-primary transition-colors text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/deekshith-kumar-v-44a08321a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary dark:text-d-text-secondary dark:hover:text-primary transition-colors text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:vdeekshithkumar@example.com"
            className="text-text-secondary hover:text-primary dark:text-d-text-secondary dark:hover:text-primary transition-colors text-xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
