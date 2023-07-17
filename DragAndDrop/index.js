import { dragStart, dragEnd, dragOver, dragEnter, dragLeave, dragDrop, generateTasks } from "./function.js";


generateTasks();

const tasks = document.querySelectorAll(".task");
const colonne = document.querySelectorAll(".colonna");

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