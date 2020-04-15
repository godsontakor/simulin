const path = require("path");
module.exports = {
  entry: "./src/weighted-mud.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
};
