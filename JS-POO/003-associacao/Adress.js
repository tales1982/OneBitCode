class Address {
    constructor(street, number, neighbordhood, city, state){
        this.street = street
        this.number = number
        this.neighbordhood = neighbordhood
        this.city = city
        this.state= state
    }

    fullAdress(){
        return `Rua ${this.street}, n° ${this.number}, ${this.neighbordhood}, ${this.city}/${this.state}`
    }
}


//Agora tenho que usar o commonJS para exporta meu module (MEU OBJETO)

module.exports = Address //Agora posso ussar meu objeto em outro arquivo separado.