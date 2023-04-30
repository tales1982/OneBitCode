/*
Crie dois vetores chamados vetorPilha e vetorAdiciona. Utilize o método Push para adicionar elementos do vetorAdiciona ao vetorPilha. Inicialmente, o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9,10] e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor, então, justifique por quê motivo isso acontece e imprima no console o vetor com os elementos adicionados.
*/

const meninos = ["joao", "josé"];
const meninas = ["maria", "vanessa"];
const alunos = meninos.push(...meninas);

console.log(alunos); //Quando você usa o push, ele retornará o tamanho do vetor unido.
console.log(meninos);
["joao", "josé", "maria", "vanessa"]; // Retorna o vetor meninos modificado

console.log(meninas);
["maria", "vanessa"];


const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];

console.table(matriz);

matriz.push(["l4, c1"]); //Cria uma nova linha
matriz[0].push("l1, c5"); // CRIA UMA Nova Coluna

console.table(matriz);
//##############################################ADCIONA UM ELEMENTO NO FINAL#############################
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
