let pokemon;
console.log("inizios");

fetch("./function.js")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    pokemon = data.slice(0, 151);
    console.log(pokemon);
    generateCards(pokemon);
  })
  .catch((err) => {});



function generateCards(listaPokemon) {
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

const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keyup", (e) => {
  let pokemonFiltrati = [];
  if (e.target.value.startsWith("type:")) {
    const value = e.target.value.replace("type:", "");
    pokemonFiltrati = pokemon.filter((pkmn) => {
      return pkmn.type.indexOf(value) != -1;
    });
  } else {
    pokemonFiltrati = pokemon.filter((pkmn) => {
      return pkmn.name.english.startsWith(e.target.value);
    });
  }
  generateCards(pokemonFiltrati);
});