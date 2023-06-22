class Garage {
    marque;
    model;
    age;
    color;
    constructor(marque, model, age, color) {
        this.marque = marque;
        this.model = model;
        this.age = age;
        this.color = color;
    }
}
let cliente;
cliente = new Garage("Ferrari", "Modelo", 2022, "Vermelho");
console.log(cliente);
let cliente2 = {
    nome: "Tales",
    conta: 22446688,
    saldo: 5.000,
    bloqueado: false,
};
console.log(`O cliente ${cliente2.nome} possui o numero de conta ${cliente2.conta}, seu saldo e de ${cliente2.saldo},sua conta esta ${cliente2.bloqueado ? "Bloqueado" : "Desbloqueada"}`);
