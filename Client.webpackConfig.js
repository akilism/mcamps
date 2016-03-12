import {
  resolve as resolvePath,
} from "path";

import {
  default as webpack,
} from "webpack";

import {
  default as ExtractTextPlugin,
} from "extract-text-webpack-plugin";

let JSX_LOADER_LIST;
let FILENAME_FORMAT;
let PRODUCTION_PLUGINS;

if ("production" === process.env.NODE_ENV) {
  JSX_LOADER_LIST = ["babel"];
  FILENAME_FORMAT = "[name]-[chunkhash].js";
  PRODUCTION_PLUGINS = [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ];
} else {
  JSX_LOADER_LIST = ["react-hot", "babel"];
  FILENAME_FORMAT = "[name].js";
  PRODUCTION_PLUGINS = [];
}

export default {
  devServer: {
    port: 8080,
    host: "localhost",
    contentBase: resolvePath(__dirname, "./public"),
    publicPath: "/assets/",
    hot: true,
    stats: { colors: true },
  },
  devtool: 'source-map',
  output: {
    path: resolvePath(__dirname, "./public/assets"),
    pathinfo: "production" !== process.env.NODE_ENV,
    publicPath: "assets/",
    filename: FILENAME_FORMAT,
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader', {
          publicPath: '',
        }),
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loaders: JSX_LOADER_LIST,
      },
      {
        test: /\.(geo)?json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[hash].[ext]',
        },
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        query: {
          name: '[name].[hash].[ext]',
        },
      },
      {
        test: /\.mp4$/,
        loader: 'file-loader',
        query: {
          name: '[name].[hash].[ext]',
        },
      },
      {
        test: /\.(otf|eot|woff2?|ttf|svg)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[hash].[ext]',
        },
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader',
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin("NODE_ENV"),
    new ExtractTextPlugin("[name]-[chunkhash].css", {
      disable: "production" !== process.env.NODE_ENV
    }),
    ...PRODUCTION_PLUGINS,
  ],
};
