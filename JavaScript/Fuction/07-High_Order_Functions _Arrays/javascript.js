const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];
//############################### 1° .map() exemplo ############################################
//maneiras de acessar um ou varios elemendo do array 
//1° metodo MAP acesso todos os nome do array somente os nomes.
/*
//usando o for
const nome = []
for(let i = 0; i < personagens.length;i++){
    nome.push(personagens[i].nome)
}
console.log(nome)
*/
//posso chamar esse mesmo objeto usando o MAP()
const nomes = personagens.map(function(personagem){
  return personagem.nome
})

console.log(nomes)
//############################# 2° .filter() exemplo ######################################
//FILTER filtrando os objetos da minha lista, quero somente os objetos da raça "ORC"
const orcs = personagens.filter(function(personagem){
  return personagem.raca === "Orc"
})

console.log(orcs)

//############################# 3° .reduce() exemplo ######################################
//com o reduce posso cria um outro objeto por tipos de dados exemplo por nome, racas, nivel
//tambem posso somar quantos elementos tenho exemlpo abaixo 


const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
return valorAcumulado + personagem.nivel
},0)//este 0 indica que minha contagen vai comesar de 0
console.log(nivelTotal)
//estou somando o nivel de todos os elementos personagens.

//Agora vou criar um novo objeto separando todos os elementos por raça
const racas = personagens.reduce(function(valorAcumulado, personagem){
  if(valorAcumulado[personagem.raca]){
    valorAcumulado[personagem.raca].push(personagem)
  }else {
    valorAcumulado[personagem.raca] = [personagem]
  }
  return valorAcumulado
}, {})
console.log(racas)

//############################# 4° .sort() exemplo #####################################
// vou ussar o sort para ordena minha lista de objeto

personagens.sort(function(a, b){
  return a.nivel - b.nivel
})
console.log(personagens)

//Dessa maneira minha lista de elementos fica do menor para o maior.
// se eu quizer começar do maior para menor e so inverter o a para b --> ( return b.nivel - a.nivel)
//posso tambem criar um novo array sem alterar o original e so criar uma variavel exemplo abaixo.
const copiaDosPersonagens = personagens.slice().sort(function (a, b) {
  return b.nivel - a.nivel;
});
console.log(copiaDosPersonagens);
//Obs utilizei o .slice()