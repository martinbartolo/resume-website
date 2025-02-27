const DEFAULT_COLOR = "#ff69b4"; // Hot pink as default

/**
 * Get all vibrant colors as an array
 */
const getVibrantColors = () => {
  if (typeof window === "undefined") return [DEFAULT_COLOR];

  const colorStr = getComputedStyle(document.documentElement)
    .getPropertyValue("--vibrant-colors")
    .trim();

  return colorStr
    ? colorStr.split(",").map(color => color.trim())
    : [DEFAULT_COLOR];
};

/**
 * Get a random color from the vibrant colors array
 */
const getRandomColor = (): string => {
  const colors = getVibrantColors();
  return colors[Math.floor(Math.random() * colors.length)] || DEFAULT_COLOR;
};

/**
 * Initialize a random color for the entire application
 * This should be called once when the app starts
 */
export const initializeRandomColor = () => {
  if (typeof window !== "undefined") {
    document.documentElement.style.setProperty("--primary", getRandomColor());
  }
};
