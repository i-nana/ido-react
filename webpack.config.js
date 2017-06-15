const webpack = require('webpack')
const path = require('path')
module.exports = {
    context: path.join(__dirname),
    entry: "./src/js/index.js",     // 入口文件
    module: {
        loaders: [{
            test: /\.js|jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    output: {
        path: __dirname,
        filename: './src/bundle.js'     // 打包生成的文件
    }
}