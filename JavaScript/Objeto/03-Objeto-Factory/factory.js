//Declaro um objeto usando Factory (FABRICA) ele usa um molde para Varias aplicaçoes aproveitando assim meu codigo.

function criarMicrofone(cor = "black" ){
    
       let  ligado =  true

         function ligarOnOff(){
            if(ligado){
                console.log("Desligar")
            }else{
                console.log("Ligar")
            }
            ligado = !ligado
        }
        return { cor, ligarOnOff};
    
}

const microfone = criarMicrofone()
microfone.ligarOnOff()
