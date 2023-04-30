let car1 = prompt("What is the brand of your car?");
let spedd1 = Number(prompt(`What is the maximum speed of the ${car1}?`));

let car2 = prompt("What is the brand of the second car?");
let spedd2 = Number(prompt(`What is the maximum speed of ${car2}?`));

if (spedd1 > spedd2) {
  document.write(
    `The ${car1} is faster, with the maximum speed of ${spedd1} km/h.`
  );
} else if (spedd2 > spedd1) {
  document.write(
    `The ${car2} is faster, with the maximum speed of ${spedd2} km/h.`
  );
} else {
  document.write(
    `The ${car1} and or ${car2} both have the same speed of ${spedd1} km/h.`
  );
}
