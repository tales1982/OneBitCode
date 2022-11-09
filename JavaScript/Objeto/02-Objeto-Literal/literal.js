//Objeto literal repesentado por {} posso colocar dentro de uma varialvel ex const teste{ nome:, cor:,}

const microfone = {
  cor: "black",
  ligado: true,
//toggleOnOff --> traducao ativar desativar estou chamando uma fuçao para essa variavel
  ativarDesativar: function () {
    if(microfone.ligado){//so vai entra aqui se for verdadeiro True
        console.log("desligar")
    }else{
        console.log("Ligar")
    }
    microfone.ligado = !microfone.ligado
  },
};

microfone.ativarDesativar()

//Aqui estou ligando e desligando o microfone usando o objeto litearl