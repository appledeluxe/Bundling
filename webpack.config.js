const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
context: path.resolve(__dirname, "./src"),
  resolve: {
    extensions: [".js","ts",".scss",".tsx",".png"],
  },
  entry: {
    app: './index.tsx',
  },
  output:{
    filename: "[name].[chunkhash].js",
    clean:true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },

    ],
  },
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // Fichero en dist
      template: "./index.html", // Fichero de entrada ./src
      scriptLoading: "blocking",
      hash: "true"
    }),
    new BundleAnalyzerPlugin(),
  ],
}