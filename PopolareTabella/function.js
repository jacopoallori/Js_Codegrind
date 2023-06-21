import { data } from "./data.js";

const table = document.getElementById("tabella");
const bottone = document.getElementById("bottone");
const tBody = document.getElementById("tBody");
console.log(tBody);

bottone.addEventListener("click",()=>{
    console.log("clixck");
        data.forEach((element) => {
        const row = document.createElement("tr");

        Object.keys(element).forEach((key) => {
            const column = document.createElement("td");
            const text = document.createTextNode(element[key]);
            column.appendChild(text);
            row.appendChild(column);
        });

        tBody.appendChild(row);
        bottone.remove();
        });
    }
)