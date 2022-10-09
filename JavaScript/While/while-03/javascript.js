/*
Faça um programa que leia e valide as seguintes informações:
a--> Nome: maior que 3 caracteres;
b--> idade: entre 0 e 150;
c--> Salário: maior que zero;
d--> sexo: 'f' ou 'm';
e--> Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length
*/
/**
Write a program that reads and validates the following information:
a--> Name: longer than 3 characters;
b--> age: between 0 and 150;
c--> Salary: greater than zero;
d--> gender: 'f' or 'm';
e--> Marital Status: 's', 'c', 'v', 'd';
Tip: if your variable is text, its length is stored in: text.length */


const name1 = prompt("Type your name?");
const age = Number(prompt("How old are you?"));
const wage = Number(prompt("What is your monthly salary?"));
const sex = prompt("What's your sex? 'm' or 'f'");
const maritalStatus = prompt("What is your family situation ( 's', 'c', 'v', 'd' )"
);

while (
  name1.length <= 2 ||
  age <= 0 ||
  age > 150 ||
 wage <= 0 ||
  (sex != "m" &&
    sex != "f" &&
    sex !== "m" &&
    sex !== "M" &&
    sex !== "f" &&
    sex !== "F") ||
  (maritalStatus !== "s" &&
    maritalStatus !== "c" &&
    maritalStatus !== "v" &&
    maritalStatus !== "d" &&
    maritalStatus !== "S" &&
    maritalStatus !== "C" &&
    maritalStatus !== "V" &&
    maritalStatus !== "D")
) {
  alert("erro");
  let name1 = prompt("Enter your name again?");
  let age = Number(prompt("Re-enter your age?"));
  let wage = Number(prompt("Enter your salary navely?"));
  let sex = prompt("what is your sex? 'm' ou 'f' ");
  let maritalStatus = prompt("What is your family situation( 's', 'c', 'v', 'd' )"
  );

  if (
    (name1.length >= 3 && age >= 0) ||
    (age < 150 && wage > 1 && sex == "m") ||
    sex == "f" ||
    sex == "F" ||
    sex == "M" ||
    sex == "f" ||
    sex == "m" ||
    maritalStatus == "s" ||
    maritalStatus == "c" ||
    maritalStatus == "v" ||
    maritalStatus == "d" ||
    maritalStatus == "S" ||
    maritalStatus == "C" ||
    maritalStatus == "V" ||
    maritalStatus == "D"
  ) {
    break;
  }
}
alert("Thanks");
