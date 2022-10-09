//O cliente vai a loja para fazer compra, e tem um cupon de desconte de 10% ate o valor de 500 euros e 15% ate o valor de 750 euros e 20% açima de 750 euros, calcule o o preço final do produto com o desconto do cliente.
const dinheiro = parseFloat(
  prompt(
    "Ola vamos as compra, \nQuanto voçe quer gostar aqui na nossa loja hoje."
  )
);
const desconto10 = (dinheiro * 10) / 100;
const desconto15 = (dinheiro * 15) / 100;
const desconto20 = (dinheiro * 20) / 100;

if (dinheiro <= 500) {
  alert(
    `\nPor ter gastado ${dinheiro.toFixed(3)} euros voçe teve ${desconto10} euros de desconto na nossa loja\n\na sua compra com o desconta é de ${
      dinheiro - desconto10
    } euros\n\nObrigado pela confiaça e volte sempre`
  );
}else if(dinheiro >=501 && dinheiro <=750){
    alert(
      `\nPor ter gastado ${dinheiro} euros voçe teve ${desconto15} euros de desconto na nossa loja\n\na sua compra com o desconta é de ${
        dinheiro - desconto15
      } euros\n\nObrigado pela confiaça e volte sempre`
    );
}else{
     alert(
       `\nPor ter gastado ${dinheiro} euros voçe teve ${desconto20} euros de desconto na nossa loja\n\na sua compra com o desconta é de ${
         dinheiro - desconto20
       } euros\n\nObrigado pela confiaça e volte sempre`
     );
}
