import { data } from "./data.js";

let dragItem = null;
let dragData = null;

export function dragStart() {
    console.log("dragStart");
    setTimeout(() => this.classList.add("hidden"), 0);
    dragItem = this;
  
    const indexColonna = data.findIndex((colonna) => {
      return colonna.id == this.parentElement.getAttribute("data-column");
    });
    const indexTask = data[indexColonna].tasks.findIndex((task) => {
      return task.id == this.getAttribute("data-task");
    });
    dragData = data[indexColonna].tasks.splice(indexTask, 1)[0];
    console.log("splicing", dragData);
    localStorage.setItem("data", JSON.stringify(data));
}

export function dragEnd() {
    this.classList.remove("hidden");
    console.log("dragEnd");
    dragItem = null;
  
    data[this.parentElement.getAttribute("data-column")].tasks.push(dragData);
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
}
export function dragOver(e) {
    e.preventDefault();
    console.log("dragOver");
}
export function dragEnter() {
    console.log("dragEnter");
}
export function dragLeave() {
    console.log("dragLeave");
}
export function dragDrop() {
    console.log("dragDrop");
    this.append(dragItem);
}



export function generateTasks() {
    data.forEach((colonna) => {
        const targetColumn = document.querySelector(
        `[data-column='${colonna.id}']`
        );
        colonna.tasks.forEach((task) => {
        const element = document.createElement("div");
        element.className = "task p-4 rounded-xl shadow-xl bg-white";
        element.setAttribute("draggable", true);
        element.setAttribute("data-task", task.id);
        const text = document.createTextNode(task.name);
        element.appendChild(text);
        targetColumn.appendChild(element);
        });
    });
}