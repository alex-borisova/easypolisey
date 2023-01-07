const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.jsx",
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /(\.jsx|\.js)$/,
        loaders: ["babel"],
        include: path.join(__dirname, "src"),
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Test",
    }),
  ],
};
