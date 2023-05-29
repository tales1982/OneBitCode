/*
Claro! Vou fazer uma breve descrição dos Enums no TypeScript.

Enums, ou Enumerações, são uma forma de definir um conjunto de constantes nomeadas em TypeScript.
Eles permitem que você defina um tipo com um conjunto específico de valores,
facilitando a representação de conjuntos fixos de opções ou estados dentro do seu código.

Ao usar Enums, você pode definir um conjunto de valores que são semanticamente relacionados.
Cada valor do Enum é associado a uma chave e um valor numérico correspondente.
Por padrão, o primeiro valor tem o valor numérico 0 e os valores subsequentes têm incrementos de 1.
 No entanto, você também pode atribuir explicitamente valores numéricos a cada membro do Enum.

Aqui está um exemplo de como você pode definir e usar um Enum no TypeScript:
*/
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Segunda"] = 0] = "Segunda";
    DiaDaSemana[DiaDaSemana["Terca"] = 1] = "Terca";
    DiaDaSemana[DiaDaSemana["Quarta"] = 2] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 3] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 4] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 5] = "Sabado";
    DiaDaSemana[DiaDaSemana["Domingo"] = 6] = "Domingo";
})(DiaDaSemana || (DiaDaSemana = {}));
var dia = DiaDaSemana.Sabado;
console.log(dia); // Saída: 5
//lembrando que enum e um number posso ussar as 2 forma abaixo.
if (dia === DiaDaSemana.Sabado || dia === 6 /*Domingo*/) {
    console.log("É fim de semana!");
}
else {
    console.log("Não é fim de semana.");
}
;
//==============================================================================
//EU DEFINO O VALOR DO PRIMEIRO ELEMENTO, LEBRANDO QUE O ENUM E UM NUMBER.
var Planetas;
(function (Planetas) {
    Planetas[Planetas["MERCURIO"] = 5] = "MERCURIO";
    Planetas[Planetas["VENUS"] = 6] = "VENUS";
    Planetas[Planetas["TERRA"] = 7] = "TERRA";
    Planetas[Planetas["MARTE"] = 8] = "MARTE";
    Planetas[Planetas["PLUTAO"] = 9] = "PLUTAO"; //9
})(Planetas || (Planetas = {}));
;
console.log(Planetas.PLUTAO); //vai mostra o numero (9)
//Outra maneiras de usar o enums
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["USER"] = "user";
})(Roles || (Roles = {}));
;
console.log(Roles.ADMIN);
