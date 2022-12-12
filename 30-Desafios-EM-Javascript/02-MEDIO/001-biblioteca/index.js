/**Você deverá criar uma função javascript que recebe como parâmetro a data de nascimento de uma pessoa no formato string e mostre no terminal a idade dessa pessoa no dia atual, sua próxima data de aniversário no formato “DD/MM/AAAA” e quantos dias faltam para o próximo aniversário dela. */
const dayjs = require("dayjs");


function birthday(date){
  const birthday = dayjs(date); //aqui vai ser minha data personalizada
  const today = dayjs(); //Exibir minha data atual

  const ageInYears = today.diff(birthday, "year"); /*.diff  Isso indica a diferença entre duas datas estou pegando data utual e ano de nacimento e estou querendo em anos pode ser meses ou dias e ate milesegundos*/

  const nextbirthday = birthday.add(ageInYears + 1, "year")
 const daysToNextBirthday = nextbirthday.diff(today, "day") 

  console.log(`Idade: ${ageInYears}`);
  console.log(`Proximo aniversario é ${nextbirthday.format("YYYY-MM-DD")}`)
  console.log(`Dias ate completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthday("1982-11-12")//Importante as data tem que ser em formato de string e em formato americano(yy-mm-dd)