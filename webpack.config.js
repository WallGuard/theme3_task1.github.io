/* webpack.config.js */

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'eval', //devtool: 'eval', // Enable to debug js code
    entry: { 
            app: [
                './src/index.js',
                './src/css/bootstrap.min.css',
                './src/css/main.css'
            ]
        },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: devMode ? '[name].js' : '[name].[chunkhash].js',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), // clean folder 'dist'
        new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            hash: false,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([{
            from: './src/fonts',
            to: './fonts'
        },
        {
            from: './src/favicon',
            to: './favicon'
        },
        {
            from: './src/img',
            to: './img'
        },
        {
            from: './src/uploads',
            to: './uploads'
        }
        ]),
    ],
    module: {
    rules: [
        {
            enforce: "pre",
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader", // enable eslint
            options: {
                fix: true
            }
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.s?[ac]ss$/,
            use: [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader'
        },
    ]
  }
};