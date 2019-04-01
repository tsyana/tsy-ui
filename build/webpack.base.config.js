const path = require('path')
const vueConfig = require('./vue-loader.config')

module.exports = {
    devtool: '#source-map',
    entry: {
        app: './docs/entry-client.js',
        vendor: [
            'es6-promise/auto',
            'vue',
            'vue-router',
            'vuex',
            'vuex-router-sync',
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist-doc'),
        publicPath: '/dist-doc/',
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        alias: {
            public: path.resolve(__dirname, '../public'),
            vue$: 'vue/dist/vue'
        }
    },
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [{
            test: /\.scss$/,
            use: ['vue-style-loader', 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                    plugins: () => vueConfig.postcss
                }
            },
                'sass-loader']
        }, {
            test: /\.css$/,
            loader: 'vue-style-loader!css-loader'
        }, {
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader',
                options: vueConfig
            }]
        }, {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader'
            }],
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }]
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            }]
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? 'warning' : false
    }
};
