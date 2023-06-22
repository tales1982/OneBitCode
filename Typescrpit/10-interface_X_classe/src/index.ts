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
  

  interface Banco{
    nome:string
    conta:number
    saldo:number
    bloqueado:boolean
  }


 let cliente2: Banco ={
  nome: "Tales",
  conta: 22446688,
  saldo: 5.000,
  bloqueado: false,
 }

 console.log(`O cliente ${cliente2.nome} possui o numero de conta ${cliente2.conta}, seu saldo e de ${cliente2.saldo},sua conta esta ${cliente2.bloqueado ? "Bloqueado": "Desbloqueada"}`)