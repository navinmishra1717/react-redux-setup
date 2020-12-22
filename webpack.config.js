const path = require("path"); // to use path.join
module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "production"),
  },
  module: {
    rules: [
      // we need rules for .js files and for .css files
      {
        test: /\.js?$/, // Transform all .js file required somewhere with Babel
        loader: "babel-loader",
        // we can also write like this
        // use: {
        //   loader: "babel-loader",
        //   options: "",
        // },
        exclude: /node-modules/,
      },
      { test: /\.css?$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
