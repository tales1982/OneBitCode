class Maquina{
    #pass
    constructor(marca,modelo,serie,){
        this.marca = marca
        this.modelo = modelo
        this.serie = serie
        this.#pass = 206
    }
    senha(password){
        if(this.#pass === password){
            return "Sua senha é : " + this.#pass
        }
    }

}

class Yammar extends Maquina{}

class Yammar2 extends Maquina{
    constructor(acessorios,marca,modelo,serie){
        super(marca,modelo,serie)
        this.acessorios = acessorios
    }
}

const vio26 = new Yammar2("3 Godets","Sany","vio26",12121212)

const vio50 = new Yammar("yammar","Vio50",99999999)

console.log(vio50.senha(206))
console.log(vio50)

console.log(vio26)
console.log(vio26.senha(206))