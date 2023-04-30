const nomeVelho = prompt("Digite nome da pessoa mais velha");
const idadeVelho = Number(prompt(`Digite a idade de ${nomeVelho}`));

const nomeNovo = prompt("Digite o nome da pessoa mais nova");
const idadeNovo = Number(prompt(`Digite a idade de ${nomeNovo}`));

const somaIdade = idadeVelho + idadeNovo
const diferencaIdade = idadeVelho - idadeNovo;

alert(`  A diferença de idade de ${nomeVelho} e ${nomeNovo} é ${diferencaIdade} anos.
    O ${nomeVelho} é o mais velho. e o ${nomeNovo} é mais novo.
    Voçes tem ${diferencaIdade} anos de diferença.
`)
