module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui"],
    appDir: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};
