/**
 * ## Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.
 */
let opcao = "";
let imoveis = [];

do {
  opcao = prompt(`Bem-vindo(a) ao Cadastro de Imoveis!\nTotal de Imoveis ${imoveis.length}\n\nEscolha uma opçao:\n1. Novo Imovel\n2. Listar Imoveis\n3. Sair.`);

  switch (opcao) {
    case "1":
        const imovel = {}
        imovel.proprietario = prompt("Informe o nome do proprietario do imovel:")
        imovel.quartos = prompt("Iforme quantos quartos possui o imovel?")
        imovel.banheiro = prompt("Quantos banheiros possui o imovel?")
        imovel.garagem = prompt("Possui garagem o imovel?(sim/nao)")

        const confirmacao = confirm(`Salva este Imovel?\nProprietario: ${ imovel.proprietario}\nQuartos: ${ imovel.quartos}\nBanheiro: ${ imovel.banheiro}\nPossui Garagem? ${ imovel.garagem}`)
        if(confirmacao){
            imoveis.push(imovel)
            alert("Imovel Salvo com suçesso!")
        }else{
          alert("Voltando ao menu.")
        }
      break
    
    case "2":
        for (let i = 0; i < imoveis.length; i++ ){
            alert(`Imovel: ${i + 1}\nProprietario: ${imoveis[i].proprietario}\nQuartos: ${imoveis[i].quartos}\nBanheiros: ${imoveis[i].banheiro}\nGaragem: ${imoveis[i].garagem}`)
        }
    break
    case "3":
      alert("Saindo....");
      break;
    default:
      alert("Numero invalido");
  }
} while (opcao !== "3");
