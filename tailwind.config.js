/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background-body)",
        "text-primary": "var(--text-main)",
        "text-secondary": "var(--text-secondary)",
        "d-background": "var(--dark-background-body)",
        "d-text-primary": "var(--dark-text-main)",
        "d-text-secondary": "var(--dark-text-secondary)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        gray: colors.slate, // Using Slate for a more modern gray look
        teal: colors.teal,
        cyan: colors.cyan,
      },
      fontFamily: {
        sans: ['"Inter"', ...require('tailwindcss/defaultTheme').fontFamily.sans],
        display: ['"Outfit"', 'sans-serif'],
        burtons: ['"Burtons"', 'sans-serif'], // Keeping existing custom font
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-hover': '0 8px 30px rgba(0, 0, 0, 0.15)',
        'neon': '0 0 10px var(--primary-color), 0 0 20px var(--primary-color)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
