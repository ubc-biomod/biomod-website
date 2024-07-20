import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1B4C90",
        secondary: "#FFFFFF",
        accent: "#3988A9",
      },
      gap: {
        defaultMob: "8",
        default: "16",
      },
      fontSize: {
        titleReg: "4.5rem",
        titleMob: "3rem",
        headingReg: "3rem",
        headingRegMob: "2.25rem",
        subHeadingReg: "2rem",
        subHeadingRegMob: "1.75rem",
        bronze: "#D0855B",
        silver: "#989898",
        gold: "#DDD167",
        platinum: "#E5E4E2",
      },
      animation: {
        "loop-scroll": "loop-scroll 12s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
