import { data } from "./data.js";
import { dragStart, dragEnd, dragOver, dragEnter, dragLeave, dragDrop, generateTasks } from "./function.js";

generateTasks();

const tasks = document.querySelectorAll(".task");
const colonne = document.querySelectorAll(".colonna");
const form = document.getElementById('myForm');

input.addEventListener("sumbit", console.log("Invio"));

tasks.forEach((task) => {
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);
});

colonne.forEach((colonna) => {
  colonna.addEventListener("dragover", dragOver);
  colonna.addEventListener("dragenter", dragEnter);
  colonna.addEventListener("dragleave", dragLeave);
  colonna.addEventListener("drop", dragDrop);
});


form.addEventListener('submit', function(e){
    e.preventDefault();
  
    const nameInput = document.getElementById('input');
      
    if(nameInput.value != null){
        let local = JSON.parse(localStorage.getItem("data"));
        local[0].tasks.push({id:10, name:nameInput.value});
        localStorage.setItem("data",JSON.stringify(local));

        nameInput.value = "";
        generateTasks();
    }

    console.log(localStorage.getItem("data"));

}
)