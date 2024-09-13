import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'hero-pattern': "linear-gradient(to right, rgba(255, 143, 112, 0.8), rgba(255, 61, 84, 1)), url('/bg-pattern-intro-desktop.svg')",
      },
    
      fontFamily: {
        'ubuntu': ['ubuntu']
      }
    },
  },
  plugins: [],
};
export default config;
