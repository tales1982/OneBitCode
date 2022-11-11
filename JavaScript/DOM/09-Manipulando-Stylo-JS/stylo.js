// mudar a cor do tema da tema de claro para escura e escura para claro
function useLightTheme(){
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}

function useDarkTheme() {
  document.body.style.color = "#f1f5f9";
  document.body.style.backgroundColor = "#212529";
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById("darkBtn").addEventListener("click", useDarkTheme);

//alterar o tema da tela usando o classLisst e o toggle meu tema estiver claro posso mudar a clase do meu tema alterando assim meu tema de forma dinamica repara que meu codigo fica muito mais pequeno usando o classe list 

document.getElementById("switchBtn").addEventListener("click", switchTheme);

function switchTheme(){
    document.body.classList.toggle('is-light')//altera meu tema para dark
    document.body.classList.toggle("is-dark");//altera meu tema para light
}