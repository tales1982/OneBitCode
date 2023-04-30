//Um array de duas dimensões podem ser imaginado como uma matriz (ou uma tabela). Como você deve ter imaginado, para definir e acessar arrays de dimensões maiores, usamos colchetes adicionais ( [ e ] ). Por exemplo: int tabela[3][5];

const array = [
    "1° Nivel",
    ["2° Nivel", 42 , true],
    [
        ["3° Nivel - item 1", "Ola mundo"],
        ["3° Nivel - item 2", "Ola mundo"],
    ],
    []
]

//console.log(array)
//console.log(array[0]);//--> [1° nivel]
//console.log(array[1]);//--> [ '2° Nivel', 42, true ]
//console.log(array[1][2]);//--> [true]
//console.log(array[2][0][1]);//--> [ola mundo]
//console.log(array[2][1][0])//--> [3° Nivel - item 2]

const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];

console.table(matriz)

matriz.push(["l4, c1"]);//Cria uma nova linha
matriz[0].push("l1, c5");// CRIA UMA Nova Coluna

console.table(matriz)

for (let i =0;i < matriz.length; i++){
    for(let j = 0;j < matriz[i].length; j++ ){
        const elemento = matriz[i][j]
        console.log("Posiçao: (" + i + ", " + j + ") valor: " + elemento)
    }
    console.log(matriz[i])
}