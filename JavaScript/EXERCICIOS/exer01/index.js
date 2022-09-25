const firstName = window.prompt("Enter the recruit's first name:");
const lastNome = window.prompt("Enter the recruit's last name:");
const fieldOfStudy = window.prompt("What is the recruit's field of study?");
const yearOfBirth = window.prompt("What is the recruit's year of birth?");


alert(
  `Successfully registered recruit!\n Full name: ${firstName} ${lastNome}\n field of study: ${fieldOfStudy}\nand your age is:  ${
    2022 - yearOfBirth
  } anos.`
);
