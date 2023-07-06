import { generateCards } from "./function.js";

let pokemon;

fetch("pokemon.json-master/pokedex.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    pokemon = data.slice(0, 151);
    console.log(pokemon);
    generateCards(pokemon);
  })
  .catch((err) => {});

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