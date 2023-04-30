//=========1° Modo Exporte Nomeado,  porque precico usar o nome exato dele para fazer a referencia dele no import=========
//Aqui posso ter quantos export eu quizer
 export function inline(){
    console.log("Export nomeado inline")
}



//=========2° Modo Exporte default, e mais flexivel se eu presisar mudar o nome la no meu arquivo principal posso alterar o nome sem ter conflito.
//OBS so posso ter um por arquivo. e ele pode ser uma funçao anonima
export default function defaultInline(){
    console.log("Export default inline")
}