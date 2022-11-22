/*Si le dernier argument nommé d'une fonction est préfixé par ..., il devient un Array où les éléments de 0 (inclus) à theArgs.length (exclusif) sont rendus disponibles par les arguments actuels passés à la fonction.*/

//une fonction pour somme tous les éléments d'un tableau

function sum(...numbers){
  return numbers.reduce((accum, num) => accum + num, 0); //Je passe une fonction fléchée en passant deux paramètres, qui commencera à 0
//1er paramètre recevoir 0, 2ème paramètre recevoir les numéros qui viendront (0 + 4 = accum = 4 accum + 8 = 12  (accum=12).... )
}

console.log(sum(4,8,7,6,3,))

//attention lors de l'utilisation des rest params je dois toujours le mettre à la fin fuction sum(n1, n2, ...n3)