/*
Método splice()

Utilize o método javascript splice() quando você precisar remover itens de um array enquanto adiciona um ou mais.

Este método recebe um indíce como primeiro argumento, onde especifica a posição que deve iniciar a remoção, o segundo argumento a quantidade de itens para remover e o terceiro em diante, são os novos elementos para adicionar. O retorno deste método, são os itens removidos.
 */

const frutas = ["Manga","Laranja", "Uva","Melancia","Maracuja","Banana"]
console.log(frutas)

const elementosRemovido = frutas.splice(3,2,"Pera", "Papaya","Goiaba")
//Aqui estou criando uma variavel para poder ver os elementos removidos.
console.log(elementosRemovido)
console.log(frutas)


//Nesse caso apaguei melancia e maracuja e acresentei pera papaya e goiaba.

