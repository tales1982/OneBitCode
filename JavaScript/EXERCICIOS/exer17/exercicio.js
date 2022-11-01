function addPlayer() {
  const nome = document.querySelector("#inome").value;
  const posicao = document.querySelector("#iposs").value;
  const numero = document.querySelector("#inun").value;
  const player = posicao + " : " + nome + " : " + "(" + numero + ")";
  const confirmacao = confirm(`Escalar ${nome} como ${posicao} ?`);

  if (confirmacao) {
    const timeEscado = document.querySelector("#timeEscalado");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerText = player;
    ul.appendChild(li);
    timeEscado.appendChild(ul);

    document.querySelector("#inome").value = "";
    document.querySelector("#iposs").value = "";
    document.querySelector("#inun").value = "";
  } else {
    alert("Anulado..");
  }
}

function removePlayer(){
   
}
