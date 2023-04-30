//Déstructuration d'objets et de array
//OBJET

const person = {
    name: 'Luke',
    job: 'Farmer',
    parents:["Peter" , "Mary"]
}
//quand je déstructure un objet, il doit avoir le même nom que l'élément que je veux déstructurer.

const name = person.name//puis-je utiliser cette façon

const { job, parents } = person//Cette voie est la plus correcte et la plus élégante,Je peux prendre plus d'un élément 

console.log(name,job,parents[1]);

//Je peux aussi casser mon array, il est important de respecter l'ordre du array.

const [father, mother] = parents

console.log(father, mother)
 //Je peux aussi utiliser une fonction pour créer un utilisateur et la déstructurer.

 function createUser({name, job, parents}){
   const id = Math.floor(Math.random() * 9999); //J'utilise Math.floor pour arrondir un nombre vers le bas et Math.random pour sélectionner un nombre aléatoire
   return {
     id,//je crée un id a (person)
     name, //se référant à (person)
     job, //se référant à (person)
     parents, //se référant à (person)
   };
 }

 //Mtn je crie mon usser
 const Luke = createUser(person)
 console.log(Luke)