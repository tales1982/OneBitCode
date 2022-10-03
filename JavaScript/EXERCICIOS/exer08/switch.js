/*
***version pt-br****
let saldo = Number(prompt("Digite uma soma de dinheiro inicial."));
let opcao = "";

do {
  opcao = Number(
    prompt(
      `Seu saldo disponivel é de ${saldo}euros.\nDigite o seguinte numero\n1- para depositar\n2- para retirada\n3- Se voçe deseja sair.`
    )
  );

  switch (opcao) {
    case 1:
      saldo += Number(prompt("Digite o valora ser depositado."));

      break;
    case 2:
      saldo -= Number(prompt("Digite o valor que voçe quer retirar."));

      break;
    case 3:
      alert("saindo......");
      break;
    default:
      alert("Opçao invalida degite um numero valido.");
  }
  if (opcao == 3) {
    break;
  }
} while (saldo !== 3);
*/
let deposit = Number(prompt("Enter a starting money sum."));
let 
option = "";

do {
  
option = Number(
    prompt(
      `Your available balance is ${deposit}euros.\nEnter the following number\n1- to deposit\n2- for withdrawal\n3- if you want to leave.`
    )
  );

  switch (
option) {
    case 1:
      
deposit += Number(prompt("Enter the amount to be deposited."));

      break;
    case 2:
      
deposit -= Number(prompt("Enter the amount you want to withdraw."));

      break;
    case 3:
      alert("going out......");
      break;
    default:
      alert("Invalid option, enter a valid number.");
  }
  if (
option == 3) {
    break;
  }
} while (deposit !== 3);