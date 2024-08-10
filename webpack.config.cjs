const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    home: "./src/ts/home.ts",
    main: "./src/ts/main.ts",
    sidebar: "./src/ts/sidebar.ts",
    datacenter: "./src/ts/datacenter.ts",
    hotels: "./src/ts/hotels.ts",
    hotelDetails: "./src/ts/hotelDetails.ts",
    booking: "./src/ts/booking.ts",
    modal: "./src/ts/modal.ts",
    login: "./src/ts/login.ts",
    tabs: "./src/ts/tabs.ts",
    log: "./src/ts/log.ts",
  },
  devtool: "source-map",

  output: {
    filename: "[name].bundle.js", // Output file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
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
