import { Deck } from "../MazzoDiCarte/Deck.js";


const pesca = document.getElementById("Pesca");
const mischia = document.getElementById("Mischia");
const mettiSotto = document.getElementById("MettiSotto");

const deck = new Deck();
console.log(deck.carte);

pesca.addEventListener("click", ()=> deck.pesca());
mischia.addEventListener("click", ()=> deck.mischia());
mettiSotto.addEventListener("click", ()=> deck.mettiSotto(deck.carte.pop()));