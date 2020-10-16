require('dotenv').config();

const webpackConfig = require("./webpack.config.js");
const envConfig = require('./configs/envs.js');

const nextConfig = {
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
  env: envConfig,
  poweredByHeader: false, // remove 'X-Powered-By: Next.js'
  trailingSlash: true, // new in v9.5.x
};

module.exports = nextConfig; //withPlugins([], nextConfig);
