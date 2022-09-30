alert(
  "Welcome to our restaurant!\nwe will offer you some of our specialties, of Brazilian food, make your choice!"
);
alert(
  "----MENU----\n\n1° strogonoff de camarão\n2° Vaca atolada\n3° Frango com quiabo\n4° Feijão tropeiro completo\n5° I'm not hungry"
);
let choice = Number(prompt("Enter your order number!"));

while (choice !== 5) {
  alert("Thank you for your school have a good appetite.");
  alert("Want anything else, choose from our menu");
  alert(
    "----MENU----\n\n1° strogonoff de camarão\n2° Vaca atolada\n3° Frango com quiabo\n4° Feijão tropeiro completo\n5° Nao tenho fome."
  );
  let choice = Number(prompt("Enter your order number."));
  if (
    choice !== 5 &&
    choice !== 4 &&
    choice !== 3 &&
    choice !== 2 &&
    choice !== 1
  ) {
    alert("Error choose a valid number");
  } else if (choice == 5) {alert("Thank you and come back often.");
    break;
  }

}


/*
alert("Bem vindo ao nosso restourante!\nvamos te ofereçer algumas das nossas especialidades, fassa sua escolha!")
 alert("----MENU----\n\n1° strogonoff de camarão\n2° Vaca atolada\n3° Frango com quiabo\n4° Feijão tropeiro completo\n5° Nao tenho fome.");
let escolha = Number(prompt("Digite o numero do seu pedido!"));

while(escolha !== 5){
    
    alert("Obrigado pela sua escola tenha um bom apetite.");
     alert("Deseja mais aguma coisa, escolha no nosso menu");
    alert(
      "----MENU----\n\n1° strogonoff de camarão\n2° Vaca atolada\n3° Frango com quiabo\n4° Feijão tropeiro completo\n5° Nao tenho fome."
    );
    let escolha = Number(prompt("Digite o numero do seu pedido."));
    if(escolha == 5){
       break
    }
}alert("Obrigado e volte sempre.");
*/
