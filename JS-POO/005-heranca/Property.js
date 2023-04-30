class Property{
    constructor(area, price){
        this.area = area
        this.price = price
    }
    getPricePerSquareMeter(){
        return this.price / this.area 
    }
   
}

class House extends Property { } 

const someHouse = new House(200,5000)


class Appartament extends Property {
    constructor(floor,city,area,price){
        super(area,price)//SUPER para busca as propriedades da class mae
        this.floor = floor
        this.city = city
    }
}

const app = new Appartament(20666,"Luxembourg",1500,400000)

console.log(app)
console.log(app.getPricePerSquareMeter().toFixed(3))
console.log(someHouse)