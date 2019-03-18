/* global module, __dirname */
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js'
  },
  plugins: [

    // Simplifies creation of HTML files to serve the bundles
    new HtmlWebpackPlugin({
      // Uses existing HTML file instead of creating one from scratch
      template: './src/index.ejs',
      templateParameters: {}
    }),

    new webpack.HotModuleReplacementPlugin(),

    new DashboardPlugin()

  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,

    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true, // to enable local network testing
    port: 3000,
    compress: false,
    inline: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true
    }
  }
})
