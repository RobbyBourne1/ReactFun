var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'head'
});

module.exports = {
    entry: __dirname + '/main.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:['es2015', 'react']
                }
            }
        ]
    },
    output: {
        filename: 'main.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig]
}