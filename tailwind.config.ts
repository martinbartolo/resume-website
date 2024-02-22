import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        content: "var(--text-gray1)",
        subcontent: "var(--text-gray2)",
      },
    },
  },
  plugins: [],
};
export default config;
