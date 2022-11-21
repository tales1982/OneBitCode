// fonction normale
function sum(a, b ){
    return a + b
}
console.log(sum(20 , 30))

//fonction anoninme
const anonymousSum = function(a, b){
    return a + b
}
console.log(anonymousSum(30, 30))
//##############################################################
//fonction flèche --Arrow Fuctions
//1° Exemple
const arrowSum = (a , b) => {
    return a + b
}
console.log("Soma arrow fonction = " + arrowSum(40,40))

//2° Exemple
const subtract = (a, b) => a - b
console.log(subtract(80,30))

//3° Exemple
//quand j'ai 01 paramètres je peux les déclarer sur une ligne, j'enlève les parenthèses et je n'ai pas besoin d'utiliser le retour.
const double = n => `Le double de ${n} est ${n * 2}`
const number = 16
console.log(double(number))

//4° Exemple avec le array
const countries = [
  "Brazil",
  "Luxembourg",
  "Françe",
  "Italie",
  "Portugal",
  "Poloni",
];
const startingWithP = countries.filter((country) => country[0] === "P");
console.log(startingWithP)