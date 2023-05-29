//1° demostracao de como evitar tipagem (?)

function enviaNavio(navio:{ capitao: string,subCapitao: string}){
//...codigo
}

enviaNavio({capitao:"Tales",subCapitao:"Theo"})//esta correto o typescript aceita essa forma.
//--> enviaNavio({capitao:"Tales"})  //-->nao e aceito, sou obrigado a declara outro elementro pq declarei com 2 string

function enviaaviao(navio:{ Pilot: string, coPilot?: string}){//Usando o ? estou dissendo que o coPilot e opcional assim nao tenho erro de sintaxe no typescript
    }

enviaaviao({Pilot:"Thomas"})

//2° demostracao do segunda opcao (unknown)

let input: unknown;

input = "Tales";
input = 40
input = true;

//O unknown pode recer qualquer tipo, mais o contrario nao e possivel exemplo abaixo.

let pessoas: string;
pessoas = "tales"
// --> pessoas = input //--> Nesse caso nao e aceito porque pessoas esta tipada em string ja o unknown nao tem tipo.
input = pessoas //Aqui e é aceito porque o unknown aceita qualquer tipagem.

// 3° Forma de evitar tipagen (any)
//quando voce usar o ANY vc desabilita completamento o typescript e como c vc estiverse usando o javascript, por isso nao e erecomedado o usso desse metodo evitar a qualquer custo.

let input2: any;

input2 = {}
input2 = []
input2 = "string"
input2 = true
//repare que e aceito qualquer tipo de dados.


pessoas = input2 //nesse caso usando o any posso passar pra minha variavel declarado como string.

// 4° Claro! Em TypeScript, o tipo never representa o conjunto vazio de valores. Isso significa que uma expressão de tipo never nunca ocorre ou nunca produz um valor. O tipo never é usado principalmente em dois cenários:

function throwError(message: string): never {
    throw new Error(message);
  }
  
