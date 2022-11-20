//Com o sessionStorage posso armazena os dados, os sessionStorage tem vários métodos.
//################################ sessionStorange #############################################
document.getElementById('sessionBtn').addEventListener('click', function (){//Botão que vai guarda
    const input = document.getElementById('session')//selecionando o valor a ser pego
    sessionStorage.setItem("info",input.value)//.setItem envia o valor do input
    input.value = ""//estou limpando o input depois que enviei os dados
})

document.getElementById('readSesssion').addEventListener('click', function(){
    const info = sessionStorage.getItem('info')
    alert('A informação salva é: ' + info)
})

//################################ localStorange #############################################
document.querySelector("#localBtn").addEventListener('click', function(){
    const input = document.querySelector('#local')
    localStorage.setItem('texto',input.value)
    input.value= ""
});

document.querySelector("#readLocal").addEventListener('click', function(){
    const texto = localStorage.getItem('texto')
    alert('O texto salvo é: '+ texto)
});

//################################ localStorange #############################################
document.querySelector("#cookieBtn").addEventListener('click', function(){

   const input = document.querySelector("#cookie");
   //cookieName=valeu;  expires=UTCStringDate; path=/;
   //o formato acima e como tenho que fazer tenho no caso ai 3 const
   const cookie = 'info: ' + input.value + ';'
   const expires = 'expires=' + new Date(2022,12,12) + ';'
   const path = 'path=/;'
   document.cookie = cookie + expires + path
   input.value=""
});


document.querySelector("#cookie2Btn").addEventListener("click", function () {
  const input = document.querySelector("#cookie2");
  //cookieName=valeu;  expires=UTCStringDate; path=/;
  //o formato acima e como tenho que fazer tenho no caso ai 3 const
  const cookie = "info: " + input.value + ";";
  const expires = "expires=" + new Date(2022, 12, 31) + ";";
  const path = "path=/;";
  document.cookie = cookie + expires + path;
  input.value = "";
});