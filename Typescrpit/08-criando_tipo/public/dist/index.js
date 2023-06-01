// Literals são tipos representados por conteúdos específicos
// Variáveis const são automaticamente literals,
// mas variáveis let também podem ser tipadas como literals
let literal;
let pi;
// Não é possível atribuir nenhum valor a um literal
//--> literal = "Hi, World!"  // produz erro
//--> pi = 3                  // produz erro
// Unions são tipos que unem diferentes possibilidades de tipos
// Eles são definidos usando o caracter pipe "|"
let option;
option = 1; // válido
option = "1"; // válido
//--> ption = false // produz erro
// Ao unirmos Unions com Literals temos um resultado muito interessante
let planet;
// Com isso o autocompletar da IDE se torna ainda mais poderoso
if (planet === "Terra") {
    console.log("Estamos na Terra");
}
// Um Alias é um nome personalizado para um tipo e pode ser atribuido a outras variáveis
let homePlanet;
homePlanet = "Terra";
// Também é possível utilizar um Alias para declarar arrays personalizados
let milkyWay;
// Repare que usando um Alias temos acesso ao autocompletar
// dentro do escopo da função e temos um código muito mais 
// limpo que se usássemos a definição inteira do tipo Planet
function checkPlanet(planet) {
    if (planet === "Terra") {
        console.log("Estamos na Terra");
    }
}
// A partir disso podemos anotar esse tipo
function greet(callback) {
    const name = prompt("Qual é o seu nome?");
    callback(name);
}
// E ao definir nosso callback temos acesso às informações
// sobre o seu tipo e retorno para nos auxiliar
greet((name) => {
    alert(`Olá, ${name}! Essa é uma saudação executada como callback!`);
});
