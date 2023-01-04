const Cliente = require("./Cliente");
const Yammar = require("./Yammar");


const cliente = new Cliente("Tales","Grevenmacher",661124040)
const vio50 = new Yammar("Yammar","Vio50",2012,3455,"f45rt452","3 Godets")

console.log(cliente,vio50,vio50.senhaValida(206))