import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vinho: {
          DEFAULT: "#780000",
          light: "#9a0000",
          dark: "#560000",
        },
        red: {
          accent: "#C1121F",
          hover: "#a00f1a",
        },
        cream: {
          DEFAULT: "#FDF0D5",
          dark: "#f5e3b8",
          light: "#fef8ee",
        },
        navy: {
          DEFAULT: "#003049",
          light: "#004a72",
          dark: "#001f30",
        },
        sky: {
          accent: "#669BBC",
          light: "#8ab3cc",
          dark: "#4d7d99",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      spacing: {
        section: "7rem",
        "section-sm": "4rem",
      },
      backdropBlur: {
        xs: "2px",
        navbar: "20px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 30, 49, 0.18)",
        "glass-sm": "0 4px 16px 0 rgba(0, 30, 49, 0.12)",
        editorial: "0 20px 60px -10px rgba(0, 48, 73, 0.2)",
        card: "0 8px 40px -8px rgba(0, 48, 73, 0.15)",
        "card-hover": "0 24px 60px -12px rgba(0, 48, 73, 0.25)",
        vinho: "0 8px 32px -8px rgba(120, 0, 0, 0.35)",
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(to bottom, rgba(0,30,49,0.55) 0%, rgba(0,30,49,0.2) 60%, rgba(0,30,49,0.65) 100%)",
        "gradient-section":
          "linear-gradient(135deg, #FDF0D5 0%, #fef8ee 50%, #f5e3b8 100%)",
        "gradient-navy":
          "linear-gradient(135deg, #003049 0%, #001f30 100%)",
        "gradient-vinho":
          "linear-gradient(135deg, #780000 0%, #C1121F 100%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        countUp: {
          "0%": { transform: "translateY(8px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease forwards",
        "fade-in-up": "fadeInUp 0.8s ease forwards",
        "slide-in": "slideIn 0.6s ease forwards",
        "count-up": "countUp 0.4s ease forwards",
        shimmer: "shimmer 2.5s infinite linear",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};

export default config;
