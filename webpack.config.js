const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

// [name] is a placeholder and will be replaced by name of the entry - app
module.exports = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Lynn Krogseng Portfolio',
    }),
    new HtmlWebpackPlugin({
      favicon: 'favicon.ico',
    }),
  ],
};