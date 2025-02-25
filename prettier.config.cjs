module.exports = {
  endOfLine: "auto",
  arrowParens: "avoid",
  trailingComma: "all",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "src/styles/globals.css",
  tailwindFunctions: ["clsx", "cva", "cn"],
};
