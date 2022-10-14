let pessoa = {
    nome: "tales",
    idade: 39,
    dizerOla(){
        console.log("Ola Mundo!, Meu nome é " + this.nome)
    }
}

//se eu quizer fazer referencia a um iten do meu objeto eu usso o THIS.oNomeDoObejeto
console.log(pessoa)

pessoa.dizerOla()