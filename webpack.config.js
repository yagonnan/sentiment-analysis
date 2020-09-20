const { join, resolve } = require("path");
// require("dotenv").config();
// const Dotenv = require("dotenv-webpack");

module.exports = {
  resolve: {
    modules: ["components", "node_modules"],

    // __dirname refer to this folder which is "[--project-directory--]"
    alias: {
      configs: join(__dirname, "configs"),
      utils: join(__dirname, "utils"),
      public: join(__dirname, "public"),
      tests: join(__dirname, "tests"),
    },
  },
  // plugins: [
  //   new Dotenv({
  //     path: resolve(__dirname, ".env"),
  //     // systemvars: true,
  //   }),
  // ],
};
