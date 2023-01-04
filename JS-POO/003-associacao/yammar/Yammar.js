class Yammar{
    #senha
    constructor(marca,modelo,ano,horas,serie,acessorio){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.horas = horas
        this.serie = serie
        this.acessorio = acessorio
        this.#senha = 206
    }

    senhaValida(pass){
        if (this.#senha === pass){
            return "Sua senha é: " + this.#senha
        }
    }
}

module.exports = Yammar