const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },
    devServer: {
        port: 3010,
        hot: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new Dotenv({
            path: './.env', // path to .env file (this is default value)
            systemvars: true, // Set to true if you would rather load all system variables as well (default: false)
            safe: true, //If true, load '.env.example' to verify the '.env' variables are all set(default: false)
            allowEmptyValues: true, // will throw an error if any env variables are empty (but only if safe mode is enabled), default value is true.
            silent: false, //If true, all warnings will be suppressed.(default:false)
            prefix: 'env.' //The prefix to use before the name of your env variables. (default: process.env.)
        })
    ]
}