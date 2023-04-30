//############################### 1° Maneira de criar Objeto####################################
//Usando a notaçao literal

const obj1 = {}
console.log(obj1)

//############################### 2° Maneira de criar Objeto####################################

const obj2 = new Object
console.log(obj2)

//############################### 3° Maneira de criar Objeto####################################

function produto(nome, preco, desconto){
   this.none = nome
   this.getPrecoComDesconto = () => {
    return preco * (1 - desconto)
   }
}

const p1 = new produto('Caneta', 7.56, 0.15)
const p2 = new produto('Noteboock', 2998.99,0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
console.log(p1)

//############################### 4° Maneira de criar Objeto####################################
//Funçao Factory
function criarFuncionario(nome, salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(
  "Fucionario " + f1.nome + " salario = " +" R$ " + f1.getSalario()  ,
  "Fucionario " + f2.nome + " salario = " + " R$ " +f2.getSalario()
);

//############################### 5° Maneira de criar Objeto####################################
//Object Create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//############################### 6° Maneira de criar Objeto####################################
//Uma Funçao que retorna um Objeto

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)