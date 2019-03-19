/* global module, __dirname */
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src/main.jsx',
  plugins: [

    // Fixes module order, since the hash ids are based on the relative path
    // https://webpack.js.org/guides/caching/#module-identifiers
    new webpack.HashedModuleIdsPlugin()

  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), './node_modules'],
    extensions: ['.json', '.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  }
}
