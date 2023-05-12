const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        })
    ],
    context: path.resolve(__dirname, 'src'),
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ]
    },
    devServer: {
        port: 4200,
    }
}