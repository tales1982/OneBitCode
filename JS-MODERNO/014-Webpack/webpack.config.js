const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.js", //entrada do meu js
  output: {
    filename: "main.js", //a sai do js
    path: path.resolve(__dirname, "dist"), //a pasta que sera criada pra saida final de distribuiçao
  },
  module: {
    //usado para o css
    rules: [
      {
        test: /\.(sa|sc|c)ss$/, //isso é uma expresao regular para o css
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      //
    ],
  },
  plugins: [
    //adcionando os pluguins
    new HtmlWebpackPlugin({
      filename: "index.html", //selecionando a o html index
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "login.html", //selecionando o html login Obs repare que estou selecionando 2 arquivos html pode ser quantos eu quizer
      template: "./src/login.html",
    }),
    new MiniCssExtractPlugin({
      //meu css
      filename: "style.css", //
    }),
  ],
};
