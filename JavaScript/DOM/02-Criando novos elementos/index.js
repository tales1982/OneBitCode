function addInput(){
//############### 1° Exemplo Adcionando input ##################
    const ul = document.getElementById("inputs")

    const newLi = document.createElement("li")
    newLi.className = "list-item"
    newLi.innerText = "Novo input:"
    
    const newInput = document.createElement("input")
    newInput.type = "text"
    newInput.name = "input"

    newLi.appendChild(newInput)
    ul.appendChild(newLi)
/* 
############### 2° Exemplo Adcionando paragrafos#################

const p = document.getElementById("paragrafo")

const newP = document.createElement("p")
newP.innerText = "ola mundo"

p.appendChild(newP)
############### 2° Exemplo Adcionando H1 #################
const h1 = document.getElementById("h11")

const newH1 =document.createElement("h1")
newH1.innerText = "Ola mundo"

h1.appendChild(newH1)
*/

}