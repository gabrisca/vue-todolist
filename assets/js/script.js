// - stampare in pagina un item per ogni elemento contenuto in un array √
// - ogni elemento ha due stati (checked o non checked) √
// - al click dell’elemento avviene il toggle dello status √
// - al click sulla croce si elimina l’elemento √
// - clickando sul bottone si aggiunge il contenuto dell’input text solo se è più lungo di 2 caratteri √
// - se è più corto appare un alert che scompare dopo 2 secondi √
// bonus: rendere possibile l’eliminazione dell’item solo se prima è stato checkato

const app = new Vue({
  el: "#app",
  data: {
    visibility: false,
    str: "",
    // array di obj con una stringa e stato checked(true o false)
    toDoarray: [
      {
        action: "Studiare",
        checked: false,
      },
      {
        action: "Ripassare",
        checked: false,
      },
      {
        action: "Mangiare",
        checked: true,
      },
      {
        action: "Dormire",
        checked: false,
      },
    ],
  },
  methods: {
    // funzione per rimuovere li
    removeItem(index) {
        this.toDoarray.splice(index, 1)
    },
    // funzione per aggiungere li
    addItem() {
      // se si siseriscono più di deu caratteri.....
      if (this.str.length > 2) {
        this.toDoarray.push({
          action: this.str,
          checked: false,
        });
        this.str = "";
        this.visibility = false;
      } 
      // ... altrimenti visibility = true e compare msg di errore
      else {
        this.visibility = true;
        setTimeout(() => {
          this.visibility = false;
        }, 2000);
      }
    },
  },
});
