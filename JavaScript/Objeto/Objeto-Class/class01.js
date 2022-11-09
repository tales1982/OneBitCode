//Objeto class sendo essa umas das maneira mais facil pra usar 
class microfone01 {
  constructor(cor = "black") {
    this.cor = cor;
    this.ligado = true;
  }
 ligarDesligar() {
    if (this.ligado) {
      console.log("Desligar");
    } else {
      console.log("Ligar");
    }
    this.ligado = !this.ligado;
  }
}


const microfone = new microfone01("white")//posso alterar minha cor aqui porque eu declartei ela la em cima
console.log(microfone)

microfone.ligarDesligar();
microfone.ligarDesligar();
microfone.ligarDesligar();
