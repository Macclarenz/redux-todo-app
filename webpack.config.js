const path = require('path')
const HTMLWebpack = require('html-webpack-plugin')
const MiniCSSExtract= require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        clean: true, 
        filename: '[name].js'
    }, 
    plugins: [
        new HTMLWebpack({
            template: './index.html',
            filename: 'index.html'
        }),
        new MiniCSSExtract({
            filename: 'style.css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }, {
                test: /\.(scss|sass)$/i,
                use: [
                    MiniCSSExtract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }, 
    resolve: {
        extensions: ['.jsx', '.js']
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        compress: true,
        hot: true,
        port: 3000
    }
}