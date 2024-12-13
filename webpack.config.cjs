const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env) => {
  return {
    mode: "development",
    entry: {
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
      darkMode: "./src/ts/darkMode.ts",
      i18n: "./src/ts/i18n.ts",
      cart: "./src/ts/cart.ts",
      datepicker: "./src/ts/datepicker.ts",
      home: "./src/ts/index.ts",
      exchangeInput: "./src/ts/exchangeableInput.ts",
      transferFrom: "./src/ts/transferForm.ts",
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
    optimization: {
      minimizer: [`...`, new CssMinimizerPlugin()],
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
