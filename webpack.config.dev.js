var webpack = require("webpack");

module.exports = {
    entry: {
        example01: [
            "webpack/hot/dev-server",
            "./01_modules_classes/js/main.js"
        ],
        example02: [
            "webpack/hot/dev-server",
            "./02_arrow_spread/js/main.js"
        ],
        example03: [
            "webpack/hot/dev-server",
            "./03_promises/js/main.js"
        ]
    },
    output: {
        path: __dirname,
        publicPath: "/",
        filename: "dist/[name].bundle.js",
        chunkFilename: "dist/[id].bundle.js",
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


