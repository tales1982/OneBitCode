const turista = prompt("Qual seu nome");
let cidades = ""
let contage = 0

let continuar = prompt("Voçe ja  visitou alguma cidade? (sim/nao)")

while (continuar === "sim") {
 let cidade = prompt("Qual é o nome da cidade. ")
//cidades = cidades + ...
 cidades+= " - " + cidade + "\n"
 contage ++
 continuar = prompt("Voçe visitou alguma outra cidade? (sim/nao)")
}
alert(
  `Turista: ${turista}\nQuantidade de cidades visitadas :${contage}\nCidades visitadas:\n ${cidades}`
);

/* 
let  vel = 80

while (vel > 0 ) {
    console.log(`O carro esta a ${vel} km/h` )
    vel -= 20
    console.log("Diminuindo 20 km/h")

    if (vel === 40){
        break
    }
}
console.log("O carro parou");
*/
