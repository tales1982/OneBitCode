
let point:[number,number,number];//estou especifiquando que na minha tupla so tem tres elementos (array)

point=[1,12,45];
console.log(point);
//Tambem posso desestrutura minha tupla criando um array exemplo abaixo
let [a,b,c] = point

console.log(b)


/*===================================================================== */
let fish:[string,string];

fish=["Dorada","truta"]
console.log(fish);
console.log(fish[1]);

/*Nao posso declara desse jeito o typesript nao aceita 
let nomes:[string,string]
nomes[0] = 'Theo'
nomes[1] = 'Thomas'
console.log(nomes[0])
*/

let mistura:[string,number,boolean];//Tambem posso declara uma tupla com varios elementos diferentes.
mistura = ["Tales",40,true]
console.log(mistura);