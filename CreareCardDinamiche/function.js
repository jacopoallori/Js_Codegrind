import { data } from "./data.js";

function creaCard(data) {
    const card = document.createElement("div");
    card.className = "w-full md:w-1/2 xl:w-1/3 px-2 py-4 h-96 text-center";
  
    const innerDiv = document.createElement("div");
    innerDiv.className = "bg-white rounded-lg overflow-hidden mb-10 shadow-xl";
    card.appendChild(innerDiv);
  
    const immagine = document.createElement("img");
    immagine.src = data.url;
    immagine.className = "w-full h-64 object-cover";
    innerDiv.appendChild(immagine);
  
    const textContainer = document.createElement("div");
    textContainer.className = "p-4";
    innerDiv.appendChild(textContainer);
  
    const titolo = document.createElement("h3");
    titolo.className = "font-semibold text-dark text-xl";
    titolo.appendChild(document.createTextNode(data.titolo));
    textContainer.appendChild(titolo);
  
    const descrizione = document.createElement("p");
    descrizione.className = "text-base text-body-color leading-relaxed mb-4";
    descrizione.appendChild(document.createTextNode(data.descrizione));
    textContainer.appendChild(descrizione);
  
    document.getElementById("divMain").appendChild(card);
}

const bottone = document.getElementById("bottone");
const divMain = document.getElementById("divMain");

bottone.addEventListener('click', function () {
    document.getElementById("divMain").textContent="";
    data.forEach((data) => {
        creaCard(data);
    });
});
