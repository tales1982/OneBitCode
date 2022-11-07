/* ########################### Sintaxe do CLASS #############################
class cliente{
    nome;
    cpf;
    rg;
    agencia;
    saldo;
}

let cliente1 =  new cliente(); // new cliente() para adcionar nono cliente
cliente1.nome = "Tales";
cliente1.cpf = 000111222333;
cliente1.rg = 30054547-8
cliente1.agencia = 2010;
cliente1.saldo = 0;


let cliente2 = new cliente()
cliente2.nome = "Suelia";
cliente2.cpf = 004115222666;
cliente2.agencia = 3010;
cliente2.saldo = 100;


console.log(cliente1)
console.log(cliente2);
//########################## FIM DO EXEMPLO ##############################################*/

class cliente{
    nome;
    cpf;
}

class contaCorrente{
    agencia;
    saldo;
 //posso chamar uma funçao aqui dentre e referncia ele somente para esse bloco usando THIS.
 sacar(valor){
    if(this.saldo >= valor){
        this.saldo -= valor 
    }
 }
}

const cliente1 = new cliente();
cliente1.nome = "TALES";
cliente1.cpf = 09944522111;

const contaCorrenteTales = new contaCorrente()
contaCorrenteTales.agencia = 1001
contaCorrenteTales.saldo = 100

const cliente2 = new cliente();
cliente2.nome = "THEO";
cliente2.cpf = 111444555777;

const contaCorrenteTheo= new contaCorrente();
contaCorrenteTheo.agencia = 1001;
contaCorrenteTheo.saldo = 500;

const cliente3 = new cliente();
cliente3.nome = "THOMAS";
cliente3.cpf = 222444666111;

const contaCorrenteThomas = new contaCorrente();
contaCorrenteThomas.agencia = 1001;
contaCorrenteThomas.saldo = 1000;

//console.log(cliente1, contaCorrenteTales.saldo)
//console.log(cliente2, contaCorrenteTheo.saldo);
console.log(cliente3, contaCorrenteThomas.saldo);

let valorSacado = 280
let valorDepositado = 480

contaCorrenteThomas.saldo += valorDepositado
contaCorrenteThomas.saldo -= valorSacado 

console.log(cliente3, contaCorrenteThomas.saldo)


