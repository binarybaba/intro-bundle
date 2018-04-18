var webpack = require("webpack");
var path = require("path");

module.exports = {
    mode: "development",
    context: __dirname,
    entry: "./js/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        publicPath: "/dist/",
        filename: "bundle.js",
        historyApiFallback: true,
        overlay: true,
    },
    module: {
        rules: [{
            enforce: "pre",
            loader: "eslint-loader",
            test: /\.js$/
        }, {
            loader: "babel-loader",
            test: /\.js$/
        }],
    }
};
