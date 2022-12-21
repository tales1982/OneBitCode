const Address = require("./Adress");
const Persson = require("./Person");

const addr01 = new Address(" Kahlemberg","2c","centre","Grevenmacher", "Luxembourg")
const cliente01 = new Persson("Tales Lima", addr01)

console.log(cliente01)

console.log(cliente01.name,cliente01.address.fullAdress());