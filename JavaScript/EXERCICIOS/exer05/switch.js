alert(
  "Enter a numeric value to be converted!\nTo convert to millimeter (mm)\nTo convert to centimeter (cm)\nTo convert to decimeter (dm)\nTo convert to dekameter (dam)\nTo convert to hectometer (hm)\nTo convert to kilometer (km)"
);

const measure = Number(prompt("Enter a value to be converted."));
const value = prompt("Enter to which measurement you want to convert, (mm-cm-dm-dam-hm-km).");

switch (value) {
  case "mm":
      alert(`The value converted to millimeters is: ${measure * 1000} MM.`);
      break;
  case "cm":
    alert(`The value converted to millimeters centimeter is: ${measure * 100} CM.`);
    break;
  case "dm":
    alert(`The value converted to millimeters decimeter is: ${measure * 10} DM.`);
    break;
  case "dam":
    alert(`The value converted to millimeters dekameter is: ${measure / 10} DAM.`);
    break;
  case "hm":
    alert(`The value converted to millimeters hectometer is: ${measure / 100} HM.`);
    break;
  case "km":
    alert(`The value converted to millimeters kilometer is: ${measure / 1000} KM.`);
    break;
  default:
    alert("[ERROR] Please enter a valid letter.");
}
/*
 *
 *
 alert(
  "digite um valor numerico para ser convertido!\nPara converter para milímetro (mm)\nPara converter para centímetro (cm)\nPara converter para decímetro (dm)\nPara converter para decâmetro (dam)\nePara converter para hectômetro (hm)\nPara converter para quilômetro (km)"
);

const medida = Number(prompt("Digite um valor para ser convertido."));
const valor = prompt("Digite para qual medida pretende converter, (mm-cm-dm-dam-hm-km).");

switch (valor) {
  case "mm":
    alert(`O valor convertido pra milímetro é: ${medida * 1000}`);
    break;
  case "cm":
    alert(`O valor convertido pra centímetro é: ${medida * 100}`);
    break;
  case "dm":
    alert(`O valor convertido pra decímetro é: ${medida * 10}`);
    break;
  case "dam":
    alert(`O valor convertido pra decâmetro é: ${medida / 10}`);
    break;
  case "hm":
    alert(`O valor convertido pra hectômetro é: ${medida / 100}`);
    break;
  case "km":
    alert(`O valor convertido pra quilômetro é: ${medida / 1000}`);
    break;
  default:
    alert("[ERRO] Digite uma letra valida.");
}
 * 
 * 
 */
