const input = document.getElementById('input');


//VALUE
document.getElementById('value').addEventListener('click', function(){
    //posso manipular os valores do inpute. Obs estou dissendo com os operadores ternerios que se meu input estiver fazio prencha com o texto  abaixo, agora se estiver prenchido, limpe o texto.
    input.value =  input.value === '' ? 'O valor alterado do inpute' :''

    console.log(input.value)//me mostra o valor em tempo real do input ou seja o valor que foi declarado no caixa de texto
    console.log(input.getAttribute('value'))//Ja nesse caso me mostrara o valor pre declarodo no html, o valor que esta adcionado no input como value, nao o resultado da caixa de texte no casso declarei o la no html VALOR INICIAL 
})

//TYPE
document.querySelector('#type').addEventListener('click', function(){
    input.type = input.type !== 'radio' ? 'radio': 'text';
    //no caso acima estou dizendo que se o input  text for diferende de radio transforme ele um radio, e se ele for um radio transforme de volta pra text.OBS posso tranforma em qualque tipo de atributo exe posso tranformar em data ou outros.
    //TAMBEM POSSO ALTERA USANDO O setAttribute('type', 'radio')
    //--------------   input.setAttribute("type", "radio");  --------------------------
    //Uma veis usando o metodo acima o setAtribute uma veis alterado nao da pra desfazer nesse caso teria qua recarregar a pagina para desfazer.

})


//PLACEHOLDER
document.querySelector('#placeholder').addEventListener('click', function(){
    input.placeholder = 'Digita algo...'
})


//DISABLE
document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled' , !input.disabled)
    //Habilita e desabilita meu input, lembrando que o disabled e um valor boleano True ou False.
})

//DATE

document.querySelector('#data').addEventListener('click', function(){
    const data = input.dataset.somethingElse;
    console.log('O valor do atributo data-something-else é:' + data)
    input.dataset.somethingElse = 'Algun outro Valor';
    console.log('O valor do atributo data-something-else agora é :' + input.dataset.somethingElse)
})