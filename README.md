# CICLOS_Y_ARREGLOS

## Estructura del Código

El código consta de:
1. **Un array** `frutas` que contiene los nombres de las frutas.
2. **Un objeto** `cantidadFrutas` donde cada fruta tiene asignada una cantidad.
3. **Un bucle `while`** que recorre el array `frutas`, imprime el nombre de la fruta y su cantidad, y suma todas las cantidades.
4. **Una variable `totalFrutas`** que almacena la suma total de frutas.

## Código Explicado

```javascript
const frutas = ["manzana", "pera", "uva", "sandía", "fresa"];

const cantidadFrutas = {
    manzana: 5,
    pera: 3,
    uva: 10,
    sandía: 1,
    fresa: 15,
};

let i = 0;
let totalFrutas = 0; // Inicializa la variable acumuladora

while (i < frutas.length) { // Recorre la lista de frutas
    console.log(frutas[i]); // Imprime el nombre de la fruta
    console.log(cantidadFrutas[frutas[i]]); // Imprime la cantidad correspondiente
    
    totalFrutas += cantidadFrutas[frutas[i]]; // Suma la cantidad al total
    i++; // Incrementa el índice para continuar con la siguiente fruta
}

console.log("Total de frutas:", totalFrutas); // Muestra la suma total
```

## Explicación Paso a Paso

1. **Definimos un array `frutas`** con los nombres de las frutas disponibles.
2. **Creamos un objeto `cantidadFrutas`** donde la clave es el nombre de la fruta y el valor es la cantidad disponible.
3. **Declaramos `totalFrutas`** con valor inicial de 0, para almacenar la suma total de frutas.
4. **Iniciamos un bucle `while`** que recorrerá el array `frutas`:
   - Imprime el nombre de la fruta actual.
   - Obtiene y muestra la cantidad de esa fruta desde el objeto `cantidadFrutas`.
   - Suma la cantidad obtenida a `totalFrutas`.
   - Incrementa `i` para pasar a la siguiente fruta en el array.
5. **Al finalizar el bucle**, imprimimos el total de frutas sumadas.

## Resultado Esperado en Consola

```
manzana
5
pera
3
uva
10
sandía
1
fresa
15
Hay un total de 34 frutas
