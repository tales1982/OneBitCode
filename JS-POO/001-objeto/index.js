/*
const book = {
    title:"Quantum",
    pages: 520,
    instock: 20,
    tags:["matematica, logica, informatique"],
    autor:{
        nome:"Arnold Boldin"
    },
    addOnStock(quantity){
        this.instock += quantity
    },

}

book.addOnStock(50)
book.addOnStock(30)
console.log(book.instock,book.autor.nome)
*/
//Funçao construtora

function Book(title,pages,tags,autor){
    this.title = title
    this.pages = pages
    this.tags = tags
    this.autor = autor
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity){
        this.inStock += quantity
    }
    this.save = function(){
        return "Ola Mundo!"
    }
}

const autor = {name: "Tales Lima"}
const  tags = ["fantasy","adventure"]

const eragon = new Book("Eragon", 468,tags, autor);
console.log(eragon)



const quantum = new Book("Quantum",578,["Matematica", "Logica", "Programaçap"],"Tales Lima",)
console.log(quantum)

quantum.published=true
quantum.addOnStock(30)
console.log(quantum)