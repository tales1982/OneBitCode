const lodash = require("lodash")
const teste = []
const array = [1,5,4,7,8,9,62,1,]
console.log(lodash.isArray([]))//true
console.log(lodash.isArray("teste"));//false
console.log(lodash.isArray(teste));//true

console.log(lodash.kebabCase("Tales lima de Paula"));//adciona - nos espaços entre os nomes
console.log(lodash.upperCase("tales lima de paula"))//tranforma em maiscula
console.log(lodash.map(array))
