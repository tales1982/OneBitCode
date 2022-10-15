//####################################1° Exemplo #############################################

function somar (a, b){
    return a + b
}

const operacao = somar
console.log(operacao(4 , 5))


//####################################2° Exemplo #############################################

const subtrair = function(a , b){
    return a - b
}
console.log(subtrair(36,13))

//Obs para criar uma funçao anonima tenho que declara uma variavel
//####################################3° Exemplo #############################################

//oiMundo()
const oiMundo = function(){
    console.log("Oi mundo")
}
oiMundo()

//Obs na funçao anonima so posso chamar a funçao depois que estiver declarada, nao posso chamar a funçao antes nao.
