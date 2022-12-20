//OBS toda veis que for cria uma classe ou uma funçao construtora usse o PascalCasse

//class construtora
class Book {
    constructor(title,pages,tags,published){
        this.title = title
        this.pages = pages
        this.tags = tags
        this.published = false
        this.stock = 0
    }
publish(){
    this.published = true
}

addStock(){
    this.stock += 50
}

}


const galinhaCega = new Book("O voo da galinha chega", 420,["ficsao", "Terro"], true )
console.log(galinhaCega);

galinhaCega.addStock()
galinhaCega.publish()
console.log(galinhaCega)

console.log(galinhaCega instanceof Book)//aqui estou peguntando se a galinhacega vais parte da instacia do Book, resumindo se a galinhacega pertence a Book.