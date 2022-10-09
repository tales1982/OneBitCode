/*
const media01 = Number(prompt("Digite sua primeira nota do trimeste"));
const media02 = Number(prompt("Digite sua segunda nota do trimeste"));
const media03 = Number(prompt("Digite sua terçeira nota do trimeste"));
const media04 = Number(prompt("Digite sua quarta nota do trimeste"));

const mediaFinal = (media01 + media02 + media03 + media04) / 4;

if (mediaFinal <= 5){
    alert("Sua media final e de " + mediaFinal + "\nVoçe esta ---REPROVADO---")
}else if(mediaFinal >=6 && mediaFinal <=9){
    alert("Sua media final e de " + mediaFinal + "\nVoçe esta aprovado ---PARABENS---")
}else if (mediaFinal == 10){
    alert("Sua media final e de " + mediaFinal + "\n--PARABENS VOCE PASSOU COM NOTA MAXIMA--")
}else{
    alert("[ERRO] Voçe digitou uma nota falsa\nDigite sua media de 1 a 10.")
}
*/

const average01 = Number(prompt("Enter your first quarter grade."));
const average02 = Number(prompt("Enter your second quarter grade."));
const average03 = Number(prompt("Enter your third quarter grade."));
const average04 = Number(prompt("Enter your fourth quarter grade."));

const averageFinal = (average01 + average02 + average03 + average04) / 4;

if (averageFinal <= 5) {
  alert("Your final average is " + averageFinal + "\nYou are ---FAILED---");
} else if (averageFinal >= 6 && averageFinal <= 9) {
  alert(
    "Your final average is " +
      averageFinal +
      "\nYou are approved ---CONGRATULATIONS---"
  );
} else if (averageFinal == 10) {
  alert(
    "Your final average is " +
      averageFinal +
      "\n--CONGRATULATIONS YOU PASSED WITH MAXIMUM GRADES--"
  );
} else {
  alert("[ERROR] You typed a fake bill\nEnter your average from 1 to 10.");
}
