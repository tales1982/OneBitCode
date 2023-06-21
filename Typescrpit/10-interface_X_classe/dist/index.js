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
