/*
for(inicializaçao ; condiçao ; finalizaçao){
    console/alet. etc......
}
-------------------------------------------------------
let nome = "tales lima de paula"

for (let contador = 0; contador < nome.length; contador ++ ){
    console.log(nome[contador])
}

-------------------------------------------------------
for (let indece = 0;indece <= 10; indece++) {
  alert("indeci = " + indece);
}

-------------------------------------------------------
let indece = 0 

for(alert("Inicializando o FOR"); indece <= 10 ; indece++){
    alert("indeci = " + indece)
}
*/
const numero = prompt("Ola,  eu sou o robo da tabuada!\n" + "informe o numero que deseja calcular a tabuada:")
let resultado = ""

for(let fator = 1;fator <=20 ; fator ++ ){
    resultado += "-->" + numero + " * " + fator + " = " + (numero * fator )+ "\n"
}
alert("Resultado da tabuada de " + numero + "\n\n" + resultado)