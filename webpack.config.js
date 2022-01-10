/* SPDX-FileCopyrightText: 2021-present Konstantin Tarkus (hello@endtest.dev) */
/* SPDX-License-Identifier: MIT */

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index",
  mode: "development",
  output: {
    publicPath: "auto"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            [
              "@babel/preset-react",
              {
                jsx: "react-jsx",
                jsxImportSource: "@emotion/react"
              }
            ],
            "@babel/preset-typescript"
          ],
          plugins: ["@emotion"]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  devServer: {
    port: 8080
  }
};
