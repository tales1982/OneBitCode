//#########################################EXEMPLO-1########################################################
function calcularMedia(a, b){
    const media = (a + b ) / 2
    return media
}

const resultado = calcularMedia(15,24)
console.log(resultado)


//#########################################EXEMPLO-2-OBJETO########################################################
function criarProduto(nome, preço){
    const produto = {
        nome,//e a mesma coisa de nome:nome
        preço,//preço: preço
        estoque: 1
    }
    return produto
}

const noteboock = criarProduto("Notebook", 2500)

console.log(noteboock)
//#########################################EXEMPLO-3########################################################

function areaRetangular(base, altura){
    return base * altura
}


function areaQuadrada(lado){
    return areaRetangular(lado, lado)

}
console.log(areaRetangular(2,3))
console.log(areaQuadrada(9))
//#########################################EXEMPLO-4########################################################
//uma funçao so pode retorna uma unica veis exemplo abixo.
function ola (){
    let texto = "..."
    return texto
    texto = "Ola Mundo"//minha funçao nao conseguer acessar daqui pra baixo porque ja dei o returnnao pode ter codigo depois de return
    console.log(texto)
}

console.log(ola())

//outro exemplo

function maioridade (idade){
    if (idade >= 18){
        return"Voçe é maior de idade."
    }else{
        return"Voçe é menor de idade."
    }
}
console.log(maioridade(18))