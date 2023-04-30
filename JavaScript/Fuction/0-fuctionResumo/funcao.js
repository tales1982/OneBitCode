/*
##################################################1° EXEMPLO############################################################
function ola(){
    console.log("Ola Mundo")
}
ola()
ola()
ola()
*/
/*
##################################################2° EXEMPLO############################################################
function dobro(x){
    console.log(`O dobro de ${x} é ${x * 2}`)
}

dobro(10);
dobro();

function dizerOla(nome = "mundo"){
    console.log(`Ola ${nome}`)
}

dizerOla("Tales")
dizerOla()

//posso passar um valor por padrao se o usuario nao digitar nada vai exibir meu resultado padrao "Mundo"
*/
/*
##################################################3° EXEMPLO############################################################
function soma(a,b,c,d,e,f=10){
    console.log(`O resultado da soma é: ${a + b + c + d + e + f}`)
}
soma(7,5,56,41,14,)

//Posso declarar varios parametos que eu quizer.e posso declar um valor por default obs; tem que estar sempre no final.
*/
/*
##################################################4° EXEMPLO############################################################
function criarUsuario(nome,email,senha,tipo = "adim"){
    const usuario = {
        nome: nome,
        email: email,
        senha,//quando tenho os mesmo nomes posso abreviar seria o mesmo senha: senha
        tipo
    }
    console.log(usuario)
   
} criarUsuario("Tales","tales@hotmail.com",1234)
criarUsuario()
*/
/*
##################################################5° EXEMPLO############################################################
//Aqui estou declarando um objeto com muitos parametos posso fazer de outra maneira mais simples veja no exemlpo 6
function muitoParametros(nome, telefone,cidade,aniversario,email,senha){
const usuario = {
    nome,
    telefone,
    cidade,
    aniversario,
    email,
    senha
}
console.log(usuario)
}
muitoParametros("Tales","661124040","Luxembourg","1211198","tales@gmail","123456789")
*/
//##################################################6° EXEMPLO##########################################################
function poucoParametro(usuario){
    usuario.nome
    usuario.telefone
    usuario.cidade
    usuario.aniversario
    usuario.email
    usuario.senha

    console.log(usuario)
}
const dadosUsuario = {
    nome:"Tales",
    telefone:"661124040",
    cidade:"Luxembourg",
    aniversario:"170465",
    email:"tales@gmail",
    senha:"12345789"
}
poucoParametro(dadosUsuario)



