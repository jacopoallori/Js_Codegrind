const lunghezzaPassword = document.getElementById("lunghezza");
const caratteriMinuscoli = document.getElementById("caratteri-minuscoli");
const caratteriMaiuscoli = document.getElementById("caratteri-maiuscoli");
const caratteriNumerici = document.getElementById("caratteri-numerici");
const caratteriSpeciali = document.getElementById("caratteri-speciali");
const generaBtn = document.getElementById("genera-btn");
const risultatoDiv = document.getElementById("risultato");

const listaCaratteriMinuscoli = "abcdefghijklmnopqrstuvwxyz";
const listaCaratteriMaiuscoli = "ABCDEFGHIJKLMNOPQRSTUVWXY";
const listaCaratteriNumerici = "0123456789";
const listaCaratteriSpeciali = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~)";

generaBtn.addEventListener("click", generaPassword);


function generaPassword() {
    let stringaIniziale = "";
    let risultato = "";
    if (caratteriMinuscoli.checked) stringaIniziale += listaCaratteriMinuscoli;
    if (caratteriMaiuscoli.checked) stringaIniziale += listaCaratteriMaiuscoli;
    if (caratteriNumerici.checked) stringaIniziale += listaCaratteriNumerici;
    if (caratteriSpeciali.checked) stringaIniziale += listaCaratteriSpeciali;
  
    for (let i = 0; i < lunghezzaPassword.value; i++) {
      risultato += stringaIniziale.charAt(
        Math.floor(Math.random() * stringaIniziale.length)
      );
    }
  
    risultatoDiv.innerHTML = "";
    risultatoDiv.innerHTML = risultato;
  }