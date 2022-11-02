const form = document.getElementById("orderForm");

form.addEventListener("submit", function(ev){
    ev.preventDefault()//evita que minha tela recaregue.

    const nome = document.querySelector('input[name = "nome"]').value;
    const adress = document.querySelector('input[name="adress"]').value;
    const pao = document.querySelector('select[name="pao"]').value;
    const carne = document.querySelector('input[name="carne"]').value;
    const msg = document.querySelector('textarea[name="msg"]').value;
    //na sala tenho que ussar um metodo diferente usar uma funçao callback
    let salada = ""//Importante usar let nao const aqui porque vai ser acresentado valores.
    document.querySelectorAll('input[name="salada"]:checked').forEach(function(item){
        salada += ' - ' + item.value + '\n'
    });

    const ul = document.getElementById("ul")
    const li = document.createElement("li")
    li.innerText = nome +" "+ adress +" "+ pao+" " + carne+" " +salada +" " + msg
        
    
    ul.appendChild(li)
});