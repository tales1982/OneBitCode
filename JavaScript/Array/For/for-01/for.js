/*
---Faça um programa, utilizando for, que permita o usuário fazer três contas de subtração.----

alert("vamos fazer três contas de subtração");

for( let res = 1; res <=3 ; res++ ){
const conta1 = prompt("Digite 1 valor para fazemos a subtraçao.")
const conta2 = prompt("Digite 2 valor para fazemos a subtraçao.");
let total = conta1 - conta2
  console.log(`Resultado ${res}--> ${total}`)
}
console.log("fim");
*/


//Write a program, using for, that allows the user to do three subtraction counts.
alert("let's do three subtraction accounts");

for (let res= 1; res <= 3; res++) {
  const conta1 = prompt("Enter 1° value to do the subtraction.");
  const conta2 = prompt("Enter 2° value to do the subtraction.");
  let total = conta1 - conta2;
  console.log(`Result ${res}--> ${total}`);
}
console.log(" The End");