export class TODOList {
    constructor() {
      this.tasks = this.caricaTask();
      this.generaTask();
      console.log("tasks", this.tasks);
    }
  
    aggiungiTask(task) {
      this.tasks.push(task);
      this.generaNuovoTask(task);
      console.log("tasks", this.tasks);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
  
    concludiTask(task) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
      console.log(this.tasks);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
  
    caricaTask() {
      const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
      return tasks;
    }
  
    generaNuovoTask(task) {
      const todo = document.getElementById("todo");
      const p = document.createElement("p");
      p.appendChild(document.createTextNode(task));
      todo.appendChild(p);
      p.addEventListener("click", (e) => {
        this.concludiTask(task);
        e.srcElement.remove();
      });
    }
  
    generaTask() {
      const todo = document.getElementById("todo");
      todo.innerHTML="";
      this.tasks.forEach((task) => {
        const p = document.createElement("p");
        p.appendChild(document.createTextNode(task));
        todo.appendChild(p);
        p.addEventListener("click", (e) => {
          this.concludiTask(task);
          e.srcElement.remove();
        });
      });
    }
}