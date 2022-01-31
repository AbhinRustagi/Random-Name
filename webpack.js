const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  optimization: {
    minimizer: [
      new HTMLWebpackPlugin({
        template: "./src/index.html",
        minify: {
          removeAttributeOptions: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  module: {
    rules: [{ test: /\.html$/, use: ["html-loader"] }],
  },
  plugins: [new CleanWebpackPlugin()],
};
