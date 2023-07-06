const urlImmagine = document.getElementById("image");
const coloreTitolo = document.getElementById("title-color");
const coloreParagrafo = document.getElementById("paragraph-color");
const paddingX = document.getElementById("padding-x");
const paddingY = document.getElementById("padding-y");
const borderRadius = document.getElementById("border-radius");

urlImmagine.addEventListener("change", (e) => {
  const immagine = document.querySelector("#card img");
  immagine.src = e.target.value;
});

coloreTitolo.addEventListener("input", (e) => {
  const titolo = document.querySelector("#card h2");
  titolo.style.color = e.target.value;
});

coloreParagrafo.addEventListener("input", (e) => {
  const testo = document.querySelector("#card p");
  testo.style.color = e.target.value;
});

paddingX.addEventListener("input", (e) => {
  const div = document.querySelector("#card div");
  div.style.paddingLeft = `${e.target.value}px`;
  div.style.paddingRight = `${e.target.value}px`;
});

paddingY.addEventListener("input", (e) => {
  const div = document.querySelector("#card div");
  div.style.paddingTop = `${e.target.value}px`;
  div.style.paddingBottom = `${e.target.value}px`;
});

borderRadius.addEventListener("input", (e) => {
  const card = document.getElementById("card");
  const immagine = document.getElementById("img");
  card.style.borderRadius = `${e.target.value}px`;
  immagine.style.borderTopLeftRadius = `${e.target.value}px`;
  immagine.style.borderTopRightRadius = `${e.target.value}px`;
});