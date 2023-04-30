//Irei mostra 3 exemplos de High Order Function, 3 maneiras de fazer a mesma coisa

//####################1° exemplo#################
function exibirElemento(elemento, indece, array){
    console.log({
        elemento,
        indece,
        array
    })
}
const lista = ["Maça","Banana","Laranja","Uva"]

//essa parte sera simplificada
for(let i =0;i < lista.length;i++){
    exibirElemento(lista[i], i, lista)
}

//####################2° exemplo#################
/**
 * function exibirElemento(elemento, indece, array){
    console.log({
        elemento,
        indece,
        array
    })
}
const lista = ["Maça","Banana","Laranja","Uva"]
 */
lista.forEach(exibirElemento)//a unica parte q e alterada USANDO O ForEach 

//####################3° exemplo#################

/**function exibirElemento(elemento, indece, array){
    console.log({
        elemento,
        indece,
        array
    })
}
const lista = ["Maça","Banana","Laranja","Uva"] */
lista.forEach(function(elemento,indece,array){
    console.log({
        elemento,
        indece,
        array
    })
})