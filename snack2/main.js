/*
Snack 2

A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

// mi creo un array di stringe
const stringArray = ['pippo', 'PLUTO', 'Paperino','toPoLINO', 'MiNNie'];

// uso il metodo map per crearmi un array formattato
const formattedArray = stringArray.map(string => {
    // trasformo le stringhe tutte in minuscolo
    const lowerCase = string.toLowerCase();
    // trasformo la prima lettera maiuscola, prendo il lowerCase e seleziono la prima lettera con .charAt e la metto in maiuscolo
    const firstLetterUpperCase = lowerCase.charAt(0).toUpperCase();
    // ritorno questi valori però li devo mettere insieme?
    return firstLetterUpperCase + lowerCase
})

console.log(formattedArray);
