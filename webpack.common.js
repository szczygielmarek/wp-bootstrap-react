const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    
    entry: {
        main: "./assets/src/index.js",
        "front-page": "./assets/src/front-page.js"
    },
    output: {
        path: path.resolve(__dirname, 'assets/dist'),
        filename: "[name].js"
    },
    resolve: { 
        extensions: ['*', '.js', '.jsx'] 
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                          plugins: function () {
                            return [
                              require('precss'),
                              require('autoprefixer')
                            ];
                          }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['assets/dist']),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new webpack.ProvidePlugin({
            '$' : 'jquery',
            jQuery: 'jquery'
        })
    ],
    externals: {
        jquery: 'jQuery'
    }

}