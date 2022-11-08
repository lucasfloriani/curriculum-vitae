const withFonts = require("next-fonts");

/** @type {import('next').NextConfig} */
const nextConfig = withFonts({
  webpack(config, options) {
    return config;
  },
  experimental: {
    appDir: true,
  },
});

module.exports = nextConfig;
