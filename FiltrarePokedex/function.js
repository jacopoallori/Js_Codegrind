export function generateCards(listaPokemon) {
  const pokedex = document.getElementById("pokedex");
  while (pokedex.firstChild) {
    pokedex.removeChild(pokedex.firstChild);
  }
  listaPokemon.forEach((pokemon) => {
    const card = `<div class="iniline-block rounded-xl m-auto max-w-[200px] p-5 hover:bg-slate-200">
                    <img src="pokemon.json-master/images/${formatID(
                      pokemon.id
                    )}.png">
                    <h3>${pokemon.name.english}</h3>
                </div>`;
    pokedex.insertAdjacentHTML("beforeend", card);
  });
}


function formatID(id) {
    if (id.toString().length == 1) return `00${id}`;
    if (id.toString().length == 2) return `0${id}`;
    return id;
}