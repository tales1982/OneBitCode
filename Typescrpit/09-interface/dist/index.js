//Obs sempre inicialize os valores
var cliente = {
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
    horas: 0
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
console.log("A m\u00E1quina da Marca: ".concat(cliente.marca, "\n  Modelo: ").concat(cliente.model, " do Ano: ").concat(cliente.age, "\n  Serial: ").concat(cliente.serial, ", est\u00E1 alugada para ").concat(cliente.nome, "\n  que mora no Endere\u00E7o: ").concat(cliente.adress, " com o telefone: ").concat(cliente.tel, "\n  o cliente devolveu a m\u00E1quina no dia 02/02/23,\n  a M\u00E1quina ").concat(cliente.model, " levou ").concat(cliente.gasoil, " litros e a m\u00E1quina tinha ").concat(cliente.horas, " horas.\n  Estado da m\u00E1quina: a m\u00E1quina estava ").concat(cliente.limpeza ? 'Limpa' : 'Suja', "."));
