//##############################1° exemplo ###########################################
//Funçao Recursiva e uma funçao que chama ela mesma.

function dividir(num) {
  console.log(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
}
//dividir(256);

//chama a primeira   funçao --> depois chama a segunda --> chama terçeira, ate que meu resto da divisoa nao seja par.

//##############################2° exemplo ###########################################
//Ateçao para nao criar uma funçao sem fim como no exemplo abaixo

function dobra(num){
    console.log(num)
    dobra(num * 2)
}
//dobra(1)

//##############################2° exemplo ###########################################
//Fatorial de 5: !5 === 5 * 4 * 3 * 2 * 1
function Fatorial(num){
    console.log("Numero: " + num)
    if (num === 0 ){
        return 1
    }else if ( num === 1 ){
        return 1
    }else{
        console.log(num + " * !" + (num - 1))
        return num * Fatorial(num - 1)
    }
}
console.log(Fatorial(5))