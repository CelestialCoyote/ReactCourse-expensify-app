const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


// Entry point -> Output file.
module.exports = (env) => {
    const isProduction = env === 'production';

    return {
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css',
            }),
        ],
        mode: 'development',
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'    
                ]
            }]
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            port: 8081,
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};
