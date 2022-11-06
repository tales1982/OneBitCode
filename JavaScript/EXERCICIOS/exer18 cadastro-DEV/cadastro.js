let butao = document.querySelector("#enviar");
butao.addEventListener('click',regitra )


function regitra(ev){
    ev.preventDefault()
    
    let inputNome = document.getElementById("nome").value;
    const form = document.getElementById("list");
    const input = document.createElement("input");
    input.type = 'text';
    input.id = "nome";
    input.name = 'nome'

    form.appendChild(input);
    
    console.log({inputNome})

}

//nao to conseguindo pegar o valort do input que adcionei 