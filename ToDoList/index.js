import {TODOList} from "./TODOlist.js";


  document.addEventListener("DOMContentLoaded", () => {
    const newTaskBtn = document.getElementById("new-task-btn");
    const clearBtn = document.getElementById("clear-btn");
    const input = document.getElementById("new-task");
  
    const todoList = new TODOList();
  
    newTaskBtn.addEventListener("click", () => {
      if(!input.value) return null;
      todoList.aggiungiTask(input.value);
      input.value = "";
    });

    clearBtn.addEventListener("click", () => {
      todoList.tasks = [];
      todoList.generaTask(todoList.tasks);
      localStorage.setItem("tasks", "");
      console.log("pulisci task");
    });

    input.addEventListener("keypress", (e) => {
      if(!input.value) return null;
      if (e.key === "Enter") {
        todoList.aggiungiTask(input.value);
        input.value = "";
      }
    });
  });