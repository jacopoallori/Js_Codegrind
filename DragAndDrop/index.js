import { placeholderData } from "./data.js";
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
    const inputValue = nameInput.value;
    let idValid =0 ;
      
    if(nameInput.value != null){
        placeholderData.forEach(function(dato) {
            if(dato.tasks.length != 0)
            { 
                let idDato = dato.tasks.pop().id;
                console.log(idDato);
                if(idValid < idDato){
                    idValid = idDato;
                }
            }
            console.log("Nuovo ID:" + idValid);
          });
        console.log('Submitted Name:', inputValue);
        data[0].tasks.push({id:idValid +1 ,name:inputValue});
        nameInput.value = "";
    }
    console.log(data[0].tasks);

}
)