//Leia o nome e um numero de um usuario, e escreva o nome dele quantas vesse ele digitou.
//Read a user's name and number, and write their name as many times as they typed

const nome = prompt("What is your name??");
const numero = Number(prompt("Enter the amount of time you want us to repeat your name!")
);
for(let i =1;i <= numero ;i++){
    
    console.log("let's repeat your name: " + nome + " " + i + " over and over.");
}