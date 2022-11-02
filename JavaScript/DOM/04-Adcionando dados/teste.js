function enviar() {
let span = document.getElementById("list-span");
let jogador = document.querySelector("#ijogo").value;
let jogador2 = document.querySelector("#ijogo2").value;

nomeCompleto = jogador + " " + jogador2;

const ul = document.createElement("ul");

const li = document.createElement("li");
li.id = "li-nome"
li.innerText = nomeCompleto; //aqui estou pegando o valor da caixa enput
ul.appendChild(li);
span.appendChild(ul);

document.querySelector("#ijogo").value = ""; //limpa o input depois que envia od dados
document.querySelector("#ijogo2").value = "";
}
function removeContact(){
    let liRemove = document.querySelector("#li-nome");
    liRemove.remove()
}
