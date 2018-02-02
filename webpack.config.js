//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
var webpack = require('webpack');
module.exports = {//注意这里是exports不是export
    entry: __dirname + "/app/main.js",//唯一入口文件，就像Java中的main方法
    output: {//输出目录
        path: __dirname + "/build",//打包后的js文件存放的地方
        filename: "bundle.js"//打包后的js文件名
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(jpg|png|gif|svg)$/i,
                exclude: /node_modules/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        inline: true,
        host: '0.0.0.0',
        port: 80,
        stats: {colors: true},
        disableHostCheck: true,
    }
};
