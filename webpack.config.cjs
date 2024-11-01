const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (env) => {
  return {
    mode: env.prod ? "productions" : "development",
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
      cart: "./src/ts/cart.ts",
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
      }),
    ],
    output: {
      filename: "js/[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,

          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],

      plugins: [new TsconfigPathsPlugin()],
    },
  };
};
