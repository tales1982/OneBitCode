//Prototype sao cadeia de prototicos fucoes ja prontas QUE EU POSSO ADCIONAR e reutilizar
function Microfone(cor = "black" ){
    this.cor = cor;//com o this estou referindo a cor podendo assim usala fora da funcao e alterala.
    this.ligado = false;
};

//se criar uma finçao da funçao principal ela sera repetida  
    Microfone.prototype.ligarDesligar  = function(){
        if(this.ligado){
        console.log("Desligar")
    }else{
        console.log("Ligar")
    }
    this.ligado = !this.ligado;
    };
    

const microfoneBranco = new Microfone('white')

microfoneBranco.ligarDesligar();
microfoneBranco.ligarDesligar();
microfoneBranco.ligarDesligar();
microfoneBranco.ligarDesligar();
microfoneBranco.ligarDesligar();

console.log(microfoneBranco)

