const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        './src/index.jsx',
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            styles: path.resolve(__dirname, 'src/globals/styles'),
            store: path.resolve(__dirname, 'src/store'),
            "@common-components": path.resolve(__dirname, 'src/commonComponents'),
            utils: path.resolve(__dirname, 'src/globals/utils'),
            assets: path.resolve(__dirname, 'dist/assets'),

        }
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({options: {}}),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        publicPath: '/',
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
        open: true
    },
    devtool: 'inline-source-map',
};
