import { data } from "./data.js";

const input = document.getElementById("ricerca");
const risultati = document.getElementById("risultati");
const lista = document.getElementById("lista");
input.addEventListener("keyup", autocomplete);

function autocompleteMatch(valore) {
    if (valore == "") return [];
    const reg = new RegExp(valore);
    return data.filter((dato) => {
      if (dato.Nome.match(reg)) return dato.Nome;
    });
}

function autocomplete(event) {
    let nomiConsigliati = "";
    const listaNomi = autocompleteMatch(event.target.value);
    listaNomi.forEach((persona) => {
        nomiConsigliati += `<li class="hover:bg-gray-200" onclick=seleziona(event)>${persona.Nome}</li>`;
    });
    risultati.innerHTML = `<ul>${nomiConsigliati}</ul>`;
}

window.seleziona = function(event) {
    risultati.innerHTML = "";
    let persona = data.filter(el=>el.Nome==event.target.textContent);
    let listaLi = `<li>Nome: ${persona[0].Nome}</li>`;
    listaLi += `<li>Cognome: ${persona[0].Cognome}</li>`;
    listaLi += `<li>Età: ${persona[0].Età}</li>`;
    listaLi += `<li>Residenza: ${persona[0].Residenza}</li>`;
    listaLi += `<li>Codice Fiscale:${persona[0].CodiceFiscale}</li>`;
    lista.innerHTML = listaLi;
    input.value = persona[0].Nome;
};
