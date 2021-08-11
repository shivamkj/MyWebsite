module.exports = {
  reactStrictMode: true,
  pageExtensions: ["js"],
  future: { webpack5: true },
  webpack: (config, { dev, isServer }) => {
    if (!dev & !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};
