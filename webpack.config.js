var webpack = require("webpack");

module.exports = {
    entry: {
        example01: [
            "webpack/hot/dev-server",
            "./01_modules_classes/js/main.js"
        ]
    },
    output: {
        path: __dirname,
        filename: "dist/[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader?optional=runtime"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "#source-map"
};


