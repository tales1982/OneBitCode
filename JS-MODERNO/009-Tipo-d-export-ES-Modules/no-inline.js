//======3° Modo Export nao inline posso organizar dessa forma chamando o exporte la em baixo ou onde quizer.
//se eu tiveser farias funçoes poderia chama toda juntas exemplo ==>  export {fn01, fn02, fn03, fn04} estaria exportando 4 funcoes.
function group(){
    console.log("Exporte nomeado nao-inline (agrupado")
}
export {group}// chamando o export

//======4°Modo Export Default====

function exportDefault(){
    console.log("Export default nao inline")
}

export default exportDefault//repare que nao passo os () porque nao quero passar o resultado da funçao, mais sim a funçao em si.