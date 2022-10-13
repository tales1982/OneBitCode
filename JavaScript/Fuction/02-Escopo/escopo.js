let pokemon = "Charmander"

function evoluir(){
    pokemon = "Charmaleon"
}

console.log(pokemon);
evoluir()
console.log(pokemon);

/**
 * nesse caso posso alterar minha vareavel que esta declarada fora do escopo funçao.
 */

//Ja nesse casso abaixo nao consigo aceçar minha variavel fora da funçao 
function criarAnimal(){
    let animal = "gato"
}
criarAnimal()
//console.log(animal)

//ja no casso abaixo usando o var consigo acessar minha vareavel fora do escopa OBS por isso nao e recomedado o usso de VAR
function avaliarNota(nota){
    if(nota > 60 ){
        var aprovado = true
        let situacao = "aprovado"
    }else{
        var aprovado = false
        let situacao = "Reprovado"
    }
    console.log(nota);
    console.log(aprovado);
    console.log(situacao);

}
avaliarNota(50)
avaliarNota(80);