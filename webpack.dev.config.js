const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'public/dev');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const config = {
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/App.jsx')
    ],
    devtool: 'inline-eval-cheap-source-map',
    output: {
        path: buildPath,
        publicPath: '/dev',
        filename: 'client.js',
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, "client"),
            "node_modules"
        ]
    },
    module: {
        rules: [
            {test: /\.js$/, loaders: ['babel-loader'], exclude: [nodeModulesPath]},
            {test: /\.jsx$/, loaders: ['babel-loader'], exclude: [nodeModulesPath]},
            {test: /\.scss$/, loaders: [
                'style-loader',
                'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                'postcss-loader?sourceMap=inline',
                'sass-loader'
            ]},
            {test: /\.css$/, loaders: [
                'style-loader',
                'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                'postcss-loader?sourceMap=inline'
            ]},
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.json$/, loaders: ['json-loader']},
            {test: /\.png$/, loader: 'file-loader'},
            {test: /\.jpe?g$/, loader: 'file-loader'},
            {test: /\.gif$/, loader: 'file-loader'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'}
        ],
    }
};

module.exports = config;
