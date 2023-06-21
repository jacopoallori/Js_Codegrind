export class Tabella {
    nomiColonne;
    data;
  
    constructor(nomiColonne, data) {
      this.nomiColonne = nomiColonne;
      this.data = data;
      this.generaTabella();
    }
  
    generaTabella() {
      const tabella = document.createElement("table");
      tabella.setAttribute("class", "text-center");
      tabella.appendChild(this.generaColonne());
      tabella.appendChild(this.generaRighe());
      document.querySelector("body").appendChild(tabella);
    }
  
    generaColonne() {
      const thead = document.createElement("thead");
      
      this.nomiColonne.forEach((nomeColonna) => {
        const th = document.createElement("th");
        const text = document.createTextNode(nomeColonna);
        th.appendChild(text);
        thead.appendChild(th);
      });
      return thead;
    }
    generaRighe() {
      const tbody = document.createElement("tbody");
      this.data.forEach((riga) => {
        const tr = document.createElement("tr");
        Object.keys(riga).forEach((key) => {
          const cella = document.createElement("td");
          const text = document.createTextNode(riga[key]);
          cella.appendChild(text);
          tr.appendChild(cella);
        });
        tbody.appendChild(tr);
      });
      return tbody;
    }
  }