/*let n1 = [2 , 4, 8 , 7]
let soma = 0

for(let i in n1){
    soma += n1[i]
}

console.log(soma / n1.length)
*/
let resultado = document.querySelector("#res");

// Somando as notas do array
let n1 = Number(prompt("Digite a primeira nota do cadete."));
let n2 = Number(prompt("Digite a segunda nota do cadete."));
let n3 = Number(prompt("Digite a terceira nota do cadete."));
let n4 = Number(prompt("Digite a quarta nota do cadete."));

let notas = [n1, n2, n3, n4];
const somaTotal = notas.reduce((a, b) => a + b); //usando o método reduce com a função arrow simples
console.log(somaTotal);

resultado.innerHTML = `A media do cadete é ${somaTotal / notas.length}`;
