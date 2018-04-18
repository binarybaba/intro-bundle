var webpack = require("webpack");
var path = require("path");

module.exports = {
    mode: "development",
    context: __dirname,
    entry: "./js/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    }
};
