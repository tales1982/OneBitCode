const a = 0; //false
const b = null; //false
const c = "teste"; // true

console.log(a || b || c);
//testou o a e deu falso, testou o b e deu falso, testou o c e deu verdadeiro

//com o operado de coalecencia nula ele nao considera expressoes que sao conversivas para false. como o 0 ou o null ou undefined
//EXEMPLO

console.log(a ?? b ?? c);
//agora ele me retorna o 0 


const foo = null ?? "teste";
console.log(foo);
//vai me retornar o teste iguinorando o null que se encontra do lado esquedo do meu operando.


const numero = 0 ?? 40;
console.log(numero)
//nesse caso ele me retorna o 0 mesmo quze o (0) seja considerado false, ele so vai iguinora ser for null ou undefined.

console.log({a,b})