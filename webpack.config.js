const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        "webpack-dev-server/client?http://127.0.0.0:8080/",
        './src/App/index'
    ],
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