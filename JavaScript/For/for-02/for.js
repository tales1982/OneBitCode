const palavra = prompt("Informa uma palavra:")
let palavraInvertida = ""

for (let i = palavra.length - 1;i >= 0; i--){
    palavra += palavra[i]
}
if ( palavra === palavraInvertida){
    alert(`${palavra } é um palidromo!`)
}else{
    alert(`${palavra } nao é um polidromo\n\n${palavra } !== ${palavraInvertida}`)
}