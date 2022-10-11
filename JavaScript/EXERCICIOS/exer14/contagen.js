let entrada = Number(prompt("Onde começa a contagem"));
let final = Number(prompt("Onde termina a contagem"));
let incremento = Number(prompt("Qual vai ser o incremento"));

for(let c = entrada;c < final;){
    console.log(c + "")
    c += incremento
}