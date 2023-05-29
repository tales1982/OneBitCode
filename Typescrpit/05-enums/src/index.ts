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
enum DiaDaSemana {
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo
  }
  
  let dia: DiaDaSemana = DiaDaSemana.Sabado;
  console.log(dia); // Saída: 5
  //lembrando que enum e um number posso ussar as 2 forma abaixo.
  if (dia === DiaDaSemana.Sabado || dia === 6/*Domingo*/) {
    console.log("É fim de semana!");
  } else {
    console.log("Não é fim de semana.");
  };
  
//==============================================================================
//EU DEFINO O VALOR DO PRIMEIRO ELEMENTO, LEBRANDO QUE O ENUM E UM NUMBER.
enum Planetas {
    MERCURIO = 5,
    VENUS,//6
    TERRA,//7
    MARTE,//8
    PLUTAO//9
};

console.log(Planetas.PLUTAO);//vai mostra o numero (9)

//Outra maneiras de usar o enums

enum Roles{
    ADMIN = 'admin',
    USER = 'user'
};

console.log(Roles.ADMIN);