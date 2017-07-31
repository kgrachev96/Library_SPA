const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/App/index',

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './dist')
    },

    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json']
    },

    module: {
        loaders: [{
            test: /\.tsx$/,
            loader: 'ts-loader',
            options: {
                configFilename: 'tsconfig.json'
            }
        },
        {
            test: /\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ]
        }],
    },

    devServer:{
        stats: 'errors-only'
    }
};