const nomesListaArray = ["Tales","Camily","Gabriel","Alex","Adria","Theo","Thomas","Thierry","Taylor"]
console.log(nomesListaArray)

//mostra o indece que esta na 5 possiçao("Theo")
console.log(nomesListaArray[5]);

//Adcionar Elementos --> .push()
//O PUSH adcionar um elemento no FINAL DA LISTA do array..
nomesListaArray.push("Suelia")
console.log(nomesListaArray)

//Adciona Elementos -->.unshift
//O UNSHIFT adcionar um elemento no COMEÇO DA LISTA do array.
nomesListaArray.unshift("Roberto")
console.log(nomesListaArray)

//Remover o ultimo elemento do array -->.pop
nomesListaArray.pop()
console.log(nomesListaArray)

// Se eu quizer ver qual foi  o ultimo elemento do array que foi removido posso fazer da seguinte forma abaixo.
const ultimoElemento = nomesListaArray.pop()
console.log(ultimoElemento)
console.log(nomesListaArray);


//Remover o Primeiro Elemento do array
nomesListaArray.shift()
console.log(nomesListaArray);

// Se eu quizer ver qual foi  o ultimo elemento do array que foi removido posso fazer da seguinte forma abaixo.
const elementoRemovido = nomesListaArray.shift()
console.log(elementoRemovido)

//Pesquizar por Elementos --> .includes() me retorna true ou false se o elemento que eu estiver buscando existir ele retorna true senao false/OBS tenho que declarar uma vareavel para poder depois fazer a busca como no exemplo abaixo.

const preocura = nomesListaArray.includes("Adria")
console.log(preocura)

// Posso tambem fazer a preocura do pelo o indice

const precuraIndice = nomesListaArray.indexOf("Adria")
console.log(precuraIndice)

// Corta e Concatenar --> slice com o slice posso conta um array de um elemento ate outro exemplo, posso contar meu array do 0 ate o 4 sendo assim ele vai declara um novo array copiando todos os elemento do 0 a 4 fazendo uma nova copia, sem alterar a outra original,  tambem posso pegar de negativos pegando por ultimos exemplo
//const dividindoArray = nomesListaArray.slice(-4, -1)
const dividindoArray = nomesListaArray.slice(0, 4)
console.log(nomesListaArray)
console.log(dividindoArray)

//Com o .concat posso junta dois ou mais array em um novo array e ainda acresentar mais elementos ser assim desejar
const array2 = ["tales" , "Suelia" , "paulin"]
const novoArrayConcat = nomesListaArray.concat(array2,)
console.log(novoArrayConcat)


//Para subistituir um elemendo do meu array por outro usso o .splice seleçiono de onde quero começar no casso escolhir o 0 e quantos elementos vou alterar no casso 3
console.log(array2)
const elementosApagado =array2.splice(0,3,"tales","lima","DePaula","teste",true,1,8)
console.log(elementosApagado)


//iterar sobre os elementos do array pecorrer todos o arrays.
for ( let indece = 0 ; indece <  novoArrayConcat.length; indece ++){
    const elemento = novoArrayConcat[indece]
    console.log(elemento + " se encontra na posiçao " + indece)
}