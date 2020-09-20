const withPlugins = require("next-compose-plugins");

const webpackConfig = require("./webpack.config.js");

const nextConfig = {
  // TODO: Better way later since these might increase over the time.
  webpack: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      modules: webpackConfig.resolve.modules,
      alias: {
        ...config.resolve.alias,
        ...webpackConfig.resolve.alias,
      },
    },
  }),
  poweredByHeader: false, // remove 'X-Powered-By: Next.js'
  trailingSlash: true, // new in v9.5.x
};

module.exports = withPlugins([], nextConfig);
