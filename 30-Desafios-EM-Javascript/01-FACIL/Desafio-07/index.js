//Cadastra 20 alunos e depois somar todas as idades.

const alunosNome = ["tales","Beto","Paulin","Cristophe","Camily","Gabriel","Alex","Adria","Theo","Thomas","Joao","Pedro","Tatiano","Maria","Judity","Francisco","Nuno","Ronaldo","Tonin","Petar"]



const alunosIdade = [41,35,30,18,18,17,11,8,1,1,75,48,63,15,42,67,65,16,35,22]

let somaIdade = 0

for(let x in alunosIdade){
    somaIdade += alunosIdade[x]
}

console.log(`Temos ${alunosNome.length} alunos cadastrado`)

console.log(`Temos ${alunosIdade.length} idades de alunos cadastrado.`)
console.log(`A soma de todas a idades é: ${ somaIdade}`)

