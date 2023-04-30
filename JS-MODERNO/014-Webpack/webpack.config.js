const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.js", //entrada do meu js
  output: {
    filename: "main.js", //a sai do js
    path: path.resolve(__dirname, "dist"), //a pasta que sera criada pra saida final de distribuiçao
  },
  mode:'production',
  module: {
    rules: [
      {// convertendo para o css
        
        test: /\.(sa|sc|c)ss$/, //isso é uma expresao regular para o css
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {// convertendo para o css
        
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {// convertendo com o babel para navegadores mais antigos
        
        test: /\.js$/,
        exclude: /node_modules/, //aqui e para que ele nao altere as node modules.
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
          
        },
      },
      {//adcionando as imagens
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader:'file-loader',
        options: {
            name:'[name].[ext]'
        }
      },
    ],
  },
  plugins: [
    //adcionando os pluguins
    new HtmlWebpackPlugin({
      //html
      filename: "index.html", //selecionando a o html index
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      //html
      filename: "login.html", //selecionando o html login Obs repare que estou selecionando 2 arquivos html pode ser quantos eu quizer
      template: "./src/login.html",
    }),
    new MiniCssExtractPlugin({
      //meu css
      filename: "style.css", //
    }),
  ],
};
