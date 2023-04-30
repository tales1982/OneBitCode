const attacker = prompt("What is the attacking character's name?");
const powerOfAttack = prompt("What is your attack power?");

const defender = prompt("What is the name of the defending character?");
let healthPoints= prompt("How many hit points does he have?");
const powerOfDefense = prompt("What is your defensive power?");
const ownShield = prompt("Does he have a shield? Yes / No");

let damageCaused = 0;

if (powerOfAttack > powerOfDefense && ownShield === "no") {
  damageCaused = powerOfAttack - powerOfDefense;
} else if (powerOfAttack > powerOfDefense && ownShield === "yes") {
  damageCaused = (powerOfAttack - powerOfDefense) / 2;
}

healthPoints -= damageCaused;

alert(attacker + " dealt  " + damageCaused + " points of damage on " + defender);
alert(
  attacker +
    "\nattack power: " +
    powerOfAttack +
    "\n\n" +
    defender +
    "\nHealth points: " +
    healthPoints +
    "\ndefense power: " +
    powerOfDefense +
    "\nHas shield: " +
    ownShield
);

/*
 *
 *
const atacante = prompt("Qual é o nome do personagem atacante?");
const poderDeAtaque = prompt("Qual é o seu poder de atque?");

const defensor = prompt("Qual é o nome do personagem defensor?");
let pontosDeVida = prompt("Quantos pontos de vida ele possue?");
const poderDeDefesa = prompt("Qual é o seu poder de defesa?");
const possuiEscudo = prompt("Ele possui um escudo? Sim/Nao");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "nao") {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor);
alert(
  atacante +
    "\nPoder de ataque: " +
    poderDeAtaque +
    "\n\n" +
    defensor +
    "\nPontos de vida: " +
    pontosDeVida +
    "\nPoder de defesa: " +
    poderDeDefesa +
    "\nPossui escudo: " +
    possuiEscudo
);
*
*
*/