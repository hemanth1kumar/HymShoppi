const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const dotenv = require('dotenv')

module.exports = {
    entry: [
        // 'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        './index.js',
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dist'),
        publicPath: '/',
        clean: true,
        chunkFilename: '[name].chunk.js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                type: 'asset/resource'
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.config().parsed)
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            title: 'HymShoppi'
        }),
    ],
    optimization: {
        // splitChunks: {
        //     chunks: 'all',
        // },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            }
        }
    },
    // resolve: {
    //     alias: {
    //         'react-dom': '@hot-loader/react-dom'
    //     }
    // }
}