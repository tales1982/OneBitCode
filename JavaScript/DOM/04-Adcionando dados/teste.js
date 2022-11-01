function enviar(){
    let span = document.getElementById("list-span")
    let jogador = document.querySelector("#ijogo").value;
    let jogador2 = document.querySelector("#ijogo2").value;
    let nomeCompleto = []
    nomeCompleto= jogador + " " + jogador2
    console.log(nomeCompleto)
    const ul = document.createElement("ul")

    const li = document.createElement("li")
    li.innerText = nomeCompleto//aqui estou pegando o valor da caixa enput
    ul.appendChild(li)
    span.appendChild(ul)
}