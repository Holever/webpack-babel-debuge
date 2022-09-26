const path = require('path')
const DebugWebpackPlugin = require('./debug-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: ["./src/index.js"],
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ],
  },
  plugins: [
    new DebugWebpackPlugin(),
    new HtmlWebpackPlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "utils": path.resolve(__dirname, './node_modules/hzero-front/lib/utils'),
    },
    fallback: {
      assert: false,
      buffer: false,
      path: false,
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
    }
  }
}
