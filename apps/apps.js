const frutas = ["manzana", "pera", "uva", "sandía", "fresa"];

const cantidadFrutas = {
    manzana: 5,
    pera: 3,
    uva: 10,
    sandía: 1,
    fresa: 15,
};

let i = 0;
let suma = 0;

while (i < frutas.length) {
    console.log(frutas[i]);
    console.log(cantidadFrutas[frutas[i]]);

    suma += cantidadFrutas[frutas[i]];
    i++;
};

console.log(`Hay en total ${suma} frutas.`)