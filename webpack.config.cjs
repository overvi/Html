const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/ts/main.ts", "./src/ts/home.ts"],
  devtool: "source-map",

  output: {
    filename: "bundle.js", // Output file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Use ts-loader for TypeScript files
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // Resolve these extensions
  },
  devServer: {
    contentBase: "./dist",
  },
};
