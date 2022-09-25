const primeiroNome = window.prompt("Iforme o primeiro nome do recruta:")
const sobrenome = window.prompt("Informe o sobrenome do recruta:")
const campoDeEstudo = window.prompt("qual é o campo de estudo do recruta?")
const anoDeNacimento = window.prompt("Qual o ano de naçimento do recruta?")


alert(
  `Recruta cadastrado com sucesso!\n Nome completo: ${primeiroNome} ${sobrenome}\n Campo de estudo: ${campoDeEstudo}\ne sua idade é:  ${2022 - anoDeNacimento } anos.`
);
