//SPREAD
//l'opérateur Spread étale mon array je peux aussi cloner le même.
const cite = ['Luxemboug', 'brasil', 'france','begiun']
console.log(...cite)
console.log(...cite[0]);//Je peux l'appliquer à un seul élément si je veux (L u x e m b o u r g)

/*
en se souvenant qu'ici, dans cet exemple, je fais référence à un ARRAY, tout ce que je supprime dans le ARRAY  ou ajoute, la même chose se produit avec le ARRAY principal, cela se produit parce que je n'ai pas créé de copie, je fais simplement référence au chemin de l'original déployer */

const citeCopie = cite

citeCopie.pop()//.POP()  supprimer un élément
citeCopie.pop()
citeCopie.push('USA')

console.log(citeCopie,cite)

//MTN je Cloner un élément

const citeClone = [...cite]

citeClone.push('Portugal','Agentine')//AJOUTER 2 element
//J'ai ajouté 2 éléments, notez que le Array original n'a pas été modifié, seul le clone, mtn c une novelle array
console.log(citeClone,  cite, citeCopie)

//Je peux aussi transformer mon Array en un objet, remarquez que j'obtiens toujours l'index des éléments.

const citeObj = {...citeClone}
console.log(citeObj)

//MTN je Cloner un Objet et j'ajust une element


const citeObjClone = {...citeObj}

citeObjClone.Add = "NovelleElement";
console.log({citeObj, citeObjClone})

//