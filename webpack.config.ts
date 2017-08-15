import * as webpack from 'webpack';
import * as path from 'path';

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, 'dist/build'),
    filename: "bundle.js"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 1337,
    open: true,
    openPage: "",
    publicPath: "./dist/build"
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};

export default config;
