class Product {
  constructor(name, description, price, inStock) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock(addInten) {
    this.inStock += addInten;
  }

  calculateDiscount(discount) {
    return this.price  * ((100 - discount) / 100)
    
}
}
const bike = new Product("Monark", ["Sport", "Lazer", "Saude"], 250);

bike.addToStock(70);

const priceFinal = bike.calculateDiscount(10)
console.log(bike)
console.log(`O preço final do produto depois do disconto é de : ${priceFinal} USS`);


