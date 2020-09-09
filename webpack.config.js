const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = (env) => {
    const isProduction = env === 'production';
    console.log(isProduction)
    console.log('env', env)
    return {
        "entry": './src/app.js',
        "output": {
            path: path.join(__dirname, '/public'),
            filename:'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader:'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader:'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                  ],
            }
        ]
        },
        plugins: [new MiniCssExtractPlugin({
            filename: 'styles.css',
          })
        ],
        mode: 'development',
        devtool: isProduction ? 'sourcemap' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, '/public'),
            historyApiFallback: true
        }
    }
}
