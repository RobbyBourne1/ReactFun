var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + 'ReactFun/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/Reactfun/index.js',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:['es2015']
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