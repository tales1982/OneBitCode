interface Voiture {
    marque: string;
    model: string;
    age: number;
    color: string;
  }
  
  class Garage implements Voiture {
    marque: string;
    model: string;
    age: number;
    color: string;
  
    constructor(marque: string, model: string, age: number, color: string) {
      this.marque = marque;
      this.model = model;
      this.age = age;
      this.color = color;
    }
  }
  
  let cliente: Garage;
  cliente = new Garage("Ferrari", "Modelo", 2022, "Vermelho");
  console.log(cliente);
  