//Declaro um objeto usando Factory (FABRICA) ele usa um molde para farias aplicaçoes aproveitando assim meu codigo.

function criarMicrofone(cor="black", ligado = -true){
    return {
        ligado: ligado,
        ligadarOnOff: function(){
            if(ligado){
                console.log("Desligar")
            }else{
                console.log("Ligar")
            }
            ligado = !ligado
        },
    }
}

const microfone = criarMicrofone()
console.log(microfone)