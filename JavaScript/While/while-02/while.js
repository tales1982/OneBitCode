/*
Make a program that reads a username and its password and does not accept the same password as the username, showing an error message and asking for the information again. */



alert("register now:");
let user = prompt("Enter the username:");
let pass = prompt("Enter user password:");

while (user === pass) {
  alert("ERROR: The username cannot be the same as the password, please try again");
  let user = prompt("username:");
  let pass = prompt("password:");

  if (user != pass) {
    break;
  }
}
alert("registered successfully");






/**Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. 
 * 
 * alert("faça já seu cadastro:");
let usuário= prompt("Digite o nome do usuario:");
let senha = prompt("Digite a senha do usuario:");

while (usuário === senha){
    alert("ERRO: o usuário não pode ser igual a senha, tente novamente");
    let usuário = prompt("Usuario:");
    let senha = prompt("Senha:");

    if(usuário != senha){
        break
    }
}
alert("cadastrado efetuado com sucesso");
 */