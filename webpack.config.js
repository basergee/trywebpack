const HtmlWebpackPlugin = require('html-webpack-plugin')

let mode = 'development';
let hmr = true;
if (process.env.NODE_ENV === 'production') {
    mode = 'production';

    /* Убираем HMR в продакшене */
    hmr = false;
}
console.log(mode + ' mode');
console.log('Hot Module Replacement ' + hmr);


module.exports = {
    mode: mode,
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    optimization: {
        minimize: false,
    },

    /* Настройки webpack-dev-server */
    devServer: {
        static: './dist',
        hot: hmr
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules',
                use: 'eslint-loader'
            }
        ]
    }
};
