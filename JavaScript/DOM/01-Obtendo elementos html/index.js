/*
//############################################## 1° Exemplo #####################################################
//No javascript, através da função show() que será executada ao clicar no botão, podemos obter um elemento do DOM através do id:
function show() {
  // Obter um elemento único a partir do seu id
  const contactList = document.getElementById("contact-list");
  console.log(contactList);
}
//############################################## 2° Exemplo #####################################################
//Também podemos obter elementos a partir de um nome de tag:
function show() {
  // ...

  // Obter vários elementos (HTMLCollection) a partir de um nome de tag
  const liElements = document.getElementsByTagName("li");
  console.log(liElements);
}

//############################################## 3° Exemplo #####################################################
//E também a partir de uma class:
function show() {
  // ...
  // Obter vários elementos (HTMLCollection) a partir de uma classe
  const contactInputs = document.getElementsByClassName("contact-input");
  console.log(contactInputs);
}

//############################################## 4° Exemplo #####################################################
//Podemos obter uma lista de elementos a partir do atributo name:
function show() {
  // ...

  // Obter vários elementos (NodeList) a partir do atributo name
  const contact1 = document.getElementsByName("contact1");
  console.log(contact1);
}

//############################################## 5° Exemplo #####################################################
//E o método mais flexível de todos, através de uma query (semelhante ao que fazemos com o CSS):
function show() {
  // ...

  // Obter vários elementos (NodeList) a partir de uma query (semelhante aos seletores do CSS)
  const contacts = document.querySelectorAll("#contact-list > li > label");
  console.log(contacts);
}

//############################################## 6° Exemplo #####################################################
// Além disso, também é possível obter um único elemento através de uma query. O comportamento é igual ao do querySelectorAll(), porém selecionando o primeiro elemento que corresponder à query:
//Obs.: Repare que também podemos acessar propriedade internas do elemento obtido.

//############################################## 7° Exemplo #####################################################
function show() {
  // ...

  // Obter um elemento a partir de uma query (o primeiro elemento a corresponder)
  const contact = document.querySelector("#contact-list > li > label");
  console.log(contact);
  console.log(contact.textContent);
}
*/
function show(){
 const li1 = document.querySelector("#contact1").value;
 const li2 = document.querySelector("#contact2").value;
 const li3 = document.querySelector("#contact3").value;
const nomeCompleto =`${li1}\n${li2}\n${li3} ` 


const lista = document.querySelector("#span1")
const ul = document.createElement("ul")
const li = document.createElement("li")
li.innerText = nomeCompleto
ul.appendChild(li)
lista.appendChild(ul)

document.querySelector("#contact1").value = "";
document.querySelector("#contact2").value = "";
document.querySelector("#contact3").value = "";
}
