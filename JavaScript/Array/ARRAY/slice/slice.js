//slice() O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original. O Array original não é modificado.

const timesFutbol = [
  "Corinthians",
  "Sao Paulo",
  "Palmeiras",
  "Santos",
  "Portuguesa",
  "Flamengo",
  "Vasco",
  "Fluminese"
];
console.log(timesFutbol);
const novoTime = timesFutbol.slice(0 , 4)
//console.log(novoTime)

//tambem posso colocar minha lista comesando acontrario exemplo

const timeAoContrario = timesFutbol.slice(-8,)
console.log(timeAoContrario)