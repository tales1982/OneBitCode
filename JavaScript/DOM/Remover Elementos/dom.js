function adcionar(){
    let section = document.querySelector("#section-list");
    let input = document.querySelector("#text-input").value;
    let ul = document.querySelector("#list-ul");
    let li = document.createElement("li");
    li.id = input
    li.innerText  = input
    section.appendChild(ul)
    ul.appendChild(li)
    document.querySelector("#text-input").value = "";
}

function remover(){
    
    let liValor = document.querySelector("li.id")
    liValor.remove()
    
}