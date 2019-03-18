const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: 'dist/'
    },
    plugins: [

        // Simplifies creation of HTML files to serve the bundles
        new HtmlWebpackPlugin({
            // Uses existing HTML file instead of creating one from scratch
            template: './src/index.ejs',
            templateParameters: {},
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        })

    ]
});
