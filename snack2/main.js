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
})
