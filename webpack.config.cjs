const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    home: "./src/ts/home.ts",
    main: "./src/ts/main.ts",
    sidebar: "./src/ts/sidebar.ts",
  },
  devtool: "source-map",

  output: {
    filename: "[name].bundle.js", // Output file name
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
