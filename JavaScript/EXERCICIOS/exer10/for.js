const word = prompt("report a word:");
let wordInverted = "";

for (let i = word.length - 1; i >= 0; i--) {
  wordInverted += word[i];
}
if (word === wordInverted) {
  alert(word + " it's a palindrome!");
} else {
  alert(word + " it's not a palindrome! \n\n" + word + " !== " + wordInverted);
}
