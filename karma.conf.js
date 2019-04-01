module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],
        // modified
        preprocessors: {
            'src/**/*.js': ['webpack', 'coverage'],
            'test/**/*.js': ['webpack']
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-safari-launcher',
            'karma-jasmine',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-coverage',
            'karma-html-reporter',
            "karma-jasmine-html-reporter",
            'karma-phantomjs-launcher'
        ],
        //modified
        // reporters: ["kjhtml", 'coverage'],
        reporters: ["kjhtml"],
        // add
        coverageReporter: {
            instrumenterOptions: {
                istanbul: {
                    noCompact: true
                }
            }
        },
        port: 43333,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS', 'Chrome', 'Safari'],
        singleRun: true,
        concurrency: Infinity,
        webpack: {
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                }]
            }
        }
    })
}
