/**
Write a program that asks for a grade, between zero and ten. Show a message if invalid and keep asking until the user enters a valid value.. */



var note = prompt("Enter a grade between 0 and 10:");

if(note <=10 && note > 0){
alert(`The note ${note } was stored`)
}else{
while(note > 10 || note < 0){
var note = prompt("Please enter a valid value:");
}
alert(`The note ${note } was stored`)
}



/**Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 
 * 
 * 
 var nota = prompt('Digite uma nota entre 0 e 10:')

if(nota <=10 && nota > 0){
alert(`A nota ${nota } foi armazenada`)
}else{
while(nota > 10 || nota < 0){
var nota = prompt('Digite um valor válido:')
}
alert(`A nota ${nota } foi armazenada`)
}* 
 * 
 */