export const placeholderData = [
    {
      id: 0,
      name: "In Coda",
      tasks: [
        { id: 0, name: "Rispondere alle email" },
        { id: 1, name: "Allenare gambe" },
        { id: 2, name: "Ricaricare credito telefono" },
        { id: 3, name: "Prenotare visita dentista" },
      ],
    },
    {
      id: 1,
      name: "Aperto",
      tasks: [],
    },
    {
      id: 2,
      name: "In Revisione",
      tasks: [],
    },
    {
      id: 3,
      name: "Completato",
      tasks: [],
    },
  ];
  
export let data = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : placeholderData;