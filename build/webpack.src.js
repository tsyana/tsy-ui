const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const vueConfig = require('./vue-loader.config')
const projectRoot = path.resolve(__dirname, '../src');

module.exports = {
    devtool: '#source-map',
    watch: process.env.TARGET === 'dev',
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'index.min.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['*', '.js', '.json', '.vue']
    },
    node: {
        fs: 'empty'
    },
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: vueConfig
                },
                    // 'eslint-loader'
                ],
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'vue-style-loader!css-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                },
                    // 'eslint-loader'
                ],
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: () => vueConfig.postcss
                        }
                    },
                        'sass-loader']
                }),
                include: projectRoot,
                exclude: /node_modules/
            }
        ]
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? 'warning' : false
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            progress: true,
            hide_modules: true
        }),
        new ExtractTextPlugin({
            filename: 'style.css'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
