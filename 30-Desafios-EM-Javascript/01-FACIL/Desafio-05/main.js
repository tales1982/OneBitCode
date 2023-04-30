//Darck Theme
function useDarkTheme(ev) {
  ev.preventDefault();
  document.body.style.color = "#f1f5f9";
  document.body.style.backgroundColor = "#000000";
}
document.getElementById("darkBtn").addEventListener("click", useDarkTheme);
//

document.querySelector("#submit").addEventListener("click", function (ev) {
  ev.preventDefault();
  const nome = document.querySelector("#nome").value;
  const vitesseAtteindre = document.querySelector("#vitesseAtteindre").value;

  if (vitesseAtteindre == 0) {
    const res = document.querySelector("#res");
    res.textContent = `bonjour ${nome} votre vitesse est ${vitesseAtteindre} Km/h La voiture est arrêtée. Considérez parti et augmentez la vitesse.`;
  } else if (vitesseAtteindre < 75) {
    res.textContent = `bonjour ${nome} votre vitesse est ${vitesseAtteindre} Km/h Vous êtes trop lent, vous pouvez augmenter la vitesse.`;
  } else if (vitesseAtteindre >= 75 && vitesseAtteindre <= 130) {
    res.textContent = `bonjour ${nome} votre vitesse est ${vitesseAtteindre} Km/h Cela semble être une bonne vitesse pour voyager.`;
  } else if (vitesseAtteindre >= 131 && vitesseAtteindre <= 150) {
    res.textContent = `bonjour ${nome} votre vitesse est ${vitesseAtteindre} Km/h Grande vitesse, pensez à baisser.`;
  }else{
    res.textContent = `""ALERT"" bonjour ${nome} votre vitesse est ${vitesseAtteindre} Km/h Vitesse dangereuse, freins automatiques activés.`;
  }
});
