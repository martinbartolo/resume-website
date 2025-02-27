/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [{ hostname: "drive.google.com" }],
  },
};

export default config;
