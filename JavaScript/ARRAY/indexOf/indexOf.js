//Utilize o método javascript indexOf() quando você precisa descobrir a posição de um elemento no array. Quando não for encontrado, o resultado será -1.

const nome = ["Tales", "Camily", "Gabriel", "Alexandre", "Adria", "Theo", "Thomas"]

console.log(nome.indexOf("Alexandre"))
// Vai me exibir a possiçao do elemento alexandre que esta nan possiçao 3 
//Agora se eu fiser uma busca e ele nao encontra o elemento, vai me retornar -1 exemplo abaixo

console.log(nome.indexOf("suelia"))

//como o elemento suelia nao exister ele me retorna  -1