
let opcao = "5"

do{
  opcao = prompt("Welcome to our restaurant!\nwe will offer you some of our specialties, make your choice!\n\n----MENU----\n1° strogonoff de camarão\n2° Vaca atolada\n3° Frango com quiabo\n4° Feijão tropeiro completo\n5° I'm not hungry.")
  switch (opcao) {
    case "1":
      alert("Good school, we'll bring you your shrimp stroganoff in minutes");
      break;
    case "2":
      alert("Good school, let's bring your Vaca atolada in minutes");
      break;
    case "3":
      alert("Good school, let's bring your Frango com quiabo in minutes");
      break;
    case "4":
      alert("Good school, let's bring your seu Feijão tropeiro in minutes");
      break;
    case "5":
      alert("Thank you for your visit and come back often.");
      break;
      default:
        alert("Valid option please enter a valid number.");
  }

} while(opcao !==5)