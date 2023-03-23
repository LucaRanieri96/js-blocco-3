/*
Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array. 
*/

// creo un array con le 10 automobili
const automobili = [
  {
    marca: "Fiat",
    modello: "500",
    alimentazione: "benzina",
  },
  {
    marca: "Volkswagen",
    modello: "Golf",
    alimentazione: "diesel",
  },
  {
    marca: "Renault",
    modello: "Clio",
    alimentazione: "benzina",
  },
  {
    marca: "Tesla",
    modello: "Model S",
    alimentazione: "elettrico",
  },
  {
    marca: "BMW",
    modello: "i8",
    alimentazione: "elettrico",
  },
  {
    marca: "Toyota",
    modello: "Yaris",
    alimentazione: "ibrida",
  },
  {
    marca: "Audi",
    modello: "A3",
    alimentazione: "gpl",
  },
  {
    marca: "Mercedes-Benz",
    modello: "GLC",
    alimentazione: "diesel",
  },
  {
    marca: "Volvo",
    modello: "XC90",
    alimentazione: "metano",
  },
  {
    marca: "Peugeot",
    modello: "208",
    alimentazione: "benzina",
  },
];

console.log(automobili);

//   ora devo dividere le automobili in base alla loro alimentazione

const benzina = [];
const elettrico = [];
const altro = [];

automobili.forEach((car) => {
  if (car.alimentazione === "benzina") {
    benzina.push(car);
  } else if (car.alimentazione === "elettrico") {
    elettrico.push(car);
  } else {
    altro.push(car);
  }
});

console.log(benzina);
console.log(elettrico);
console.log(altro);
