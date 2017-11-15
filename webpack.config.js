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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    output: {
        filename: 'transformed,js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig]
}

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('.components/ReactFun');

ReactDOM.render(
    <App />,
    document.getElementById('app')
);