import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      color: {
        text1: "#4a4a4a",
        text2: "#a3a3a3",
      },
    },
  },
  plugins: [],
};
export default config;
