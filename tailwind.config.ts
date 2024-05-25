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
      fontSize: {
        subHeadingReg: "2rem",
        subHeadingRegMob: "1.75rem",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
