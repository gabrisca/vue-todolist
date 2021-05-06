// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni elemento ha due stati (checked o non checked)
// - al click dell’elemento avviene il toggle dello status
// - al click sulla croce si elimina l’elemento
// - clickando sul bottone si aggiunge il contenuto dell’input text solo se è più lungo di 2 caratteri
// - se è più corto appare un alert che scompare dopo 2 secondi
// bonus: rendere possibile l’eliminazione dell’item solo se prima è stato checkato

const app = new Vue({
  el: "#app",
  data: {
    toDoarray:[
      {
        action: "Studiare",
        checked: false
      },
      {
        action: "Ripassare",
        checked: false
      },
      {
        action: "Mangiare",
        checked: true
      },
      {
        action: "Dormire",
        checked: false
      },
    ],
  },
  methods: {
    
  },
})