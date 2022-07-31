const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.join(__dirname, "/src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html"),
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new Dotenv(),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "/src"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
  },
};
