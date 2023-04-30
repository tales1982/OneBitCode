const idade = Number(prompt("Em que ano voçe naçeu?"))
const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear();
const resultado = anoAtual - idade
if(resultado <= 64){
    alert(`Voçe tem ${resultado} anos,\nSeja bem vindo ao banco do Brasil. `);
}else if (resultado >=65 && resultado <=150){
    alert(
      `Voçe tem mais de 65 anos, certo?\n\n====ATEÇAO! DIRIJA ATE A FILA PREFERENCIAL!====\n\nSeja bem vindo(a) ao banco do Brasil `
    );
}else{
    alert(`Voçe tem ${ resultado } anos, acho que voçe ja deveria esta Morto :-) kkk `)
}