const button =document.querySelector("#register-button")
button.addEventListener("click", register)

function removeEvent(){

    let remover = document.querySelector("#li-valor");
    remover.remove()
    
}



function register(ev){
    const username = ev.currentTarget.parentNode.children.username.value
    const password = ev.currentTarget.parentNode.children.password.value
    const confirmPassword = ev.currentTarget.parentNode.children.passwordConfirmation.value

    if(password === confirmPassword){
        let section = document.querySelector("#section")
        let ul = document.querySelector("#ul") 
        let li = document.createElement("li")
        li.id = 'li-valor'
        li.textContent = username;
        section.appendChild(ul)
        ul.appendChild(li)
        document.querySelector("#username").value = "";
        document.querySelector("#password").value = "";
        document.querySelector("#passwordConfirmation").value = "";
    }else{
        alert("Senha errada tente denovo");
    }

}

