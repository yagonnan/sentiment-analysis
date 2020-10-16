const { join } = require("path");

module.exports = {
  resolve: {
    modules: ["components", "node_modules"],

    // __dirname refer to this folder which is "[--project-directory--]"
    alias: {
      utils: join(__dirname, "utils"),
      public: join(__dirname, "public"),
      configs: join(__dirname, 'configs'),
    },
  },
};
