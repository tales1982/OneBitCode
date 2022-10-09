/*
Método find()

Utilize o método javascript find() se você precisar retornar o valor de um elemento do array. O método find executa a função callback testando cada elemento do array, até encontrar o valor desejado e o callback retornar true.
*/

const pizzas = [
  "mussarela",
  "calabressa",
  "portuguesa",
  "margarita",
  "atun",
  "4 fromage",
  "catupiry",
];
//posso fazer uma busca por pizzas exemplo

const preocuraPizza = pizzas.find(pizzas => pizzas.startsWith("4"))//poderia ableviar o nome pizzas (p => p.startsWith("4"))
//Ele vai me retorna somente o primeiro valor se tiver mais de um element que começe com a mesma letra da busca so me retorna a primeira.
console.log(preocuraPizza)


//=======================Busca UM OBJETO==============================//

const frutas = [
    {nome:"jaca", quantidade: 2},
    {nome:"banana", quantidade: 5},
    {nome:"manga", quantidade: 11}
]

const retornoFrutas = frutas.find(frutas => frutas.nome == "manga")
console.log(retornoFrutas)