import {caricaDati,createOption,generaCard} from "./function.js";
import {select,container} from "./function.js";



fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => {
    const obj = data.message;
    Object.keys(obj).forEach((key) => {
      if (obj[key].length == 0) {
        createOption(key);
      } else {
        obj[key].forEach((element) => {
          createOption(`${element} ${key}`);
        });
      }
    });
    caricaDati(select.value);
});

  select.addEventListener("change", (e) => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    console.log(e.target.value);
    caricaDati(e.target.value);
  });