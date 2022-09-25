const entry1 = prompt("Enter the first number:");
const entry2 = prompt("Enter the second number:");

const x = parseFloat(entry1)//convert from string to numbers
const y = parseFloat(entry2)//convertir des lettres en chiffres


const sum = x + y
const subtraction = x - y;
const multiplication = x * y;
const division = x / y;


alert(
  "Resul:\n" +
    "\nSum: " +
    sum +
    "\nSubtraction: " +
    subtraction +
    "\nMultiplication " +
    multiplication +
    "\nDivision: " +
    division
);