export const select = document.getElementById("breeds");
export const container = document.getElementById("container");

export function createOption(value) {
    const option = document.createElement("option");
    option.value = value;
    option.appendChild(document.createTextNode(value));
    select.appendChild(option);
}

export function caricaDati(breed) {
    if (breed == "") return;
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        generaCard(data.message);
      });
}

export function generaCard(photos) {
    photos.sort(() => Math.random() - 0.5);
    photos.forEach((photo) => {
      const card = document.createElement("div");
      card.className =
        "rounded-xl shadow-xl text-xl bg-white h-[200px] w-[200px] bg-cover";
      card.style.backgroundImage = `url(${photo})`;
      // card.style.background
      container.appendChild(card);
    });
}
