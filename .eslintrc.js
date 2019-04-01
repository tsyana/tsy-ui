module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'vue',
        'html'
    ],
    env: {
        browser: true
    },
    // add your custom rules here
    'rules': {
        'indent': ['error', 4, {
            'SwitchCase': 1
        }],
        'import/prefer-default-export': 0,
        'import/no-dynamic-require': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'never'
        }],
        'no-underscore-dangle': ['error', {'allow': ['_uid']}]
    }
}
