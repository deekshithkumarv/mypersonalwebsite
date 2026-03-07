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
        gray: colors.slate,
        violet: colors.violet,
        teal: colors.teal,
        cyan: colors.cyan,
        indigo: colors.indigo,
      },
      fontFamily: {
        sans: ['"Inter"', ...require('tailwindcss/defaultTheme').fontFamily.sans],
        display: ['"Space Grotesk"', 'sans-serif'],
        burtons: ['"Burtons"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-primary': 'radial-gradient(at 40% 20%, hsla(265,84%,60%,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.2) 0px, transparent 50%)',
        'mesh-dark': 'radial-gradient(at 40% 20%, hsla(265,84%,50%,0.4) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(183,100%,40%,0.3) 0px, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'shimmer': 'shimmer 2.8s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'orbit': 'orbit 18s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.08)',
        'glass-hover': '0 8px 40px rgba(0, 0, 0, 0.14)',
        'neon': '0 0 12px var(--primary-color), 0 0 32px rgba(108,62,244,0.3)',
        'card': '0 1px 0 rgba(255,255,255,0.06), 0 4px 40px rgba(108,62,244,0.1)',
        'card-hover': '0 1px 0 rgba(255,255,255,0.06), 0 8px 60px rgba(108,62,244,0.25)',
        'glow-primary': '0 0 30px rgba(108,62,244,0.35)',
        'glow-secondary': '0 0 30px rgba(20,184,166,0.3)',
      },
      dropShadow: {
        'glow': ['0 0 8px rgba(108,62,244,0.6)', '0 0 16px rgba(108,62,244,0.3)'],
        'glow-teal': ['0 0 8px rgba(20,184,166,0.6)', '0 0 16px rgba(20,184,166,0.3)'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.43, 0.13, 0.23, 0.96)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
