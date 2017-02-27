const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'public/dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        client: path.join(__dirname, '/client/App.jsx'),
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'react-tap-event-plugin',
            'material-ui'
        ]
    },
    devtool: 'source-map',
    output: {
        path: buildPath,
        filename: '[name].js',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: 'client.css',
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
            }
        }),
        new webpack.NoEmitOnErrorsPlugin()
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
            {test: /\.scss$/, use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss-loader?sourceMap=inline',
                    'sass-loader'
                ]
            })},
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
