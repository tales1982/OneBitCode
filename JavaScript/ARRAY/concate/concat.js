/*Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/
const vetorInteiro = [1,4,6,8]
const vetorString = ["tales", "alex","theo","thomas"]
const vetorDouble = [11,14,16,20]

const vetores = vetorInteiro.concat(vetorString).concat(vetorDouble)
console.log(vetores)


console.log(vetorInteiro.concat(vetorString).concat(vetorDouble))