const vueConfig = {
    preserveWhitespace: false,
    postcss: [
        require('autoprefixer')({
            browsers: ['last 3 versions']
        })
    ]
};


module.exports = vueConfig;
