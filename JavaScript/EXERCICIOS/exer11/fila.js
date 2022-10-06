/*
#################################################Fila de Espera#########################################################

Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/
let fila = [];
let opçao = "";

do {
  let paciente = "";
  for (let i = 0; i < fila.length; i++) {
    paciente += (i + 1) + "° - " + fila[i] + "\n";
  }
  opçao = prompt("Pacientes:\n" + paciente +"\nEscolha uma açao:\n1. Novo paciente\n2. Consultar\n3. Sair" );

  switch (opçao) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?");
      fila.push(novoPaciente);
      break;
    case "2":
      const pacienteConsultado = fila.shift();
      if (pacienteConsultado){
        alert(pacienteConsultado + "Foi removido da lista")
      }else{
        alert("Nao ha paciente na fila!")
      }
      
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opçao invalida");
  }
} while (opçao !== "3");
