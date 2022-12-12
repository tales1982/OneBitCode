/*const lodash = require("lodash")//estou importando a bliblioteca lodash
console.log(lodash.isArray([]))
console.log(lodash.kebabCase("tales lima de paula"))***/
const dados = {
  nome: "Tales Lima", //string
  job: "Fullstack Develope", //string
  techonologies: ["HTML", "CSS", "Javascript", "SQL"], //array
  working: true, //booleano
  yearsOfExperience: 7, //number
  website: null, //nulo obs: no JSON nao exister underfined
};
console.log(dados); //objeto

//posso converter meu obj json em uma string ===> JSON.parse(dados)  converte todo os dados em uma string.
const dadosString = JSON.stringify(dados); //===> convertido pra string
console.log(dadosString);

//tambem posso converter de string para objeto.
const dadosObj = JSON.parse(dadosString); //objeto
console.log(dadosObj);
