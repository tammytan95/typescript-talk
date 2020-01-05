import HtmlWebPackPlugin from "html-webpack-plugin";
// import { CleanWebpackPlugin } from "clean-webpack-plugin";

const config = () => {
  return {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      publicPath: "/"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".jsx", ".js", ".json", ".css", ".scss"]
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "awesome-typescript-loader"
        }
      ]
    },
    // @ts-ignore
    devServer: {
      port: 3000,
      historyApiFallback: true,
      open: false,
      hot: true
    },
    plugins: [
      // new CleanWebpackPlugin()
      new HtmlWebPackPlugin({
        template: "./src/index.html"
      })
    ]
  };
};
export default config;
