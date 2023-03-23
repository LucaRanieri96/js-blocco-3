/*
snack 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi. 
*/

const animals = [
  {
    nome: "Leone",
    famiglia: "Felidi",
    classe: "Mammiferi",
  },
  {
    nome: "Aquila",
    famiglia: "Accipitridi",
    classe: "Uccelli",
  },
  {
    nome: "Squalo",
    famiglia: "Squalidae",
    classe: "Pesci",
  },
  {
    nome: "Rana",
    famiglia: "Ranidae",
    classe: "Anfibi",
  },
  {
    nome: "Cane",
    famiglia: "canidi",
    classe: "Mammiferi",
  },
  {
    nome: "Orso",
    famiglia: "Ursidae",
    classe: "Mammiferi",
  },
  {
    nome: "gallina",
    famiglia: "fasianidi",
    classe: "uccelli",
  },
];
// come il primo esercizio ma stavolta uso filter come fabio
// e mettiamo tutto in un unica riga tanto non abbiamo condizioni
const mammiferi = animals.filter((animal) => animal.classe === "Mammiferi");

console.log(mammiferi);
