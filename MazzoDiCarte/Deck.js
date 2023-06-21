export class Deck {
    constructor() {
      this.carte = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "fante", "donna", "re"];
      console.log("genero nuovo mazzo", this.carte);
    }
  
    mischia() {
      const paragrafo = document.getElementById("BoxCarta");
      if(this.carte.length!=0){
        this.carte.sort((a, b) => 0.5 - Math.random());
        console.log("mazzo mischiato", this.carte);
        paragrafo.textContent = "Le carte sono state mischiate";
      }else{
        console.log("Carte terminate");
        paragrafo.textContent = "Nessuna carta nel mazzo";
      }
    }
  
    pesca() {
      const paragrafo = document.getElementById("BoxCarta");
      const carta = this.carte.pop();
      if(this.carte.length!=0){
        console.log("Carta pescata:", carta);
        console.log("Mazzo dopo la pescate:", this.carte);
        paragrafo.textContent = `Carta pescata: ${carta}`;
      }
      else{
        console.log("Carte terminate");
        paragrafo.textContent = "Nessuna carta nel mazzo";
      }
    }
    mettiSotto(carta) {
      const paragrafo = document.getElementById("BoxCarta");
      if(this.carte.length!=0){
        this.carte.unshift(carta);
        console.log("Mazzo dopo metti sotto.", this.carte);
        paragrafo.textContent = `La carta ${carta} è stata messa sotto al mazzo`;
      }else{
        console.log("Le carte sono terminate");
        paragrafo.textContent = "Nessuna carta nel mazzo";
      }
    }
  }