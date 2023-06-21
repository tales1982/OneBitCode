interface Maquinas {
    marca: string;
    model: string;
    age: number;
    serial: number;
  }
  
  interface User extends Maquinas {
    nome: string;
    adress: string;
    tel: number;
    contrato: number;
  }
  
  interface RetornoMaquina extends User {
    gasoil: number;
    limpeza: boolean;
    horas: number;
  }
  //Obs sempre inicialize os valores
  let cliente: RetornoMaquina = {
    marca: '',
    model: '',
    age: 0,
    serial: 0,
    nome: '',
    adress: '',
    tel: 0,
    contrato: 0,
    gasoil: 0,
    limpeza: false,
    horas: 0,
  };
  
  cliente.marca = prompt("Qual a marca da Maquina");
  cliente.model = prompt("Qual o modelo da Maquina");
  cliente.age = Number(prompt("Qual o ano da Maquina"));
  cliente.serial = Number(prompt("Qual o número de série da Maquina"));
  cliente.nome = prompt("Qual o nome do cliente.");
  cliente.adress = prompt("Qual o endereço do cliente");
  cliente.tel = Number(prompt("Qual o telefone de contato"));
  cliente.gasoil = Number(prompt("Quantos litros de gasóleo a máquina levou"));
    cliente.limpeza = prompt("Qual o estado da máquina? Digite 'Suja' ou 'Limpa'") === "Limpa";
 
  
  console.log(`A máquina da Marca: ${cliente.marca}
  Modelo: ${cliente.model} do Ano: ${cliente.age}
  Serial: ${cliente.serial}, está alugada para ${cliente.nome}
  que mora no Endereço: ${cliente.adress} com o telefone: ${cliente.tel}
  o cliente devolveu a máquina no dia 02/02/23,
  a Máquina ${cliente.model} levou ${cliente.gasoil} litros e a máquina tinha ${cliente.horas} horas.
  Estado da máquina: a máquina estava ${cliente.limpeza ? 'Limpa' : 'Suja'}.`);
  