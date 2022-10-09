//Escreva um algoritmo que calcule a soma dos numeros de 1 a 15.
//Write an algorithm that calculates the sum of the numbers from 1 to 15.
const numbers = Number(prompt("Digite um numero"))

for(let i = 1;i <= 15;i ++){
    let res = numbers + i
    console.log(`The sum is ${numbers} + ${i} == ${res}`)
}