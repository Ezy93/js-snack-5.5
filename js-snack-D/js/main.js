/**
    *  Dato un array, genera randomicamente due numeri:
    *   il primo numero che dovrà essere sempre minore del numero degli elementi dell'array
    *   il secondo numero che dovrà essere sempre minore del primo numero
    *
    * Scrivi una funzione che accetti tre argomenti: l'array e i due numeri nell'ordine scritto prima.
    * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra il primo numero e il secondo numero
*/

const arrayMix = [1, 2, 3, "giovanni", "laura", "esteban", 4];
const newArray = [];

let randomIntA = Math.floor(Math.random()* arrayMix.length +1);
console.log(randomIntA);

let randomIntB = Math.floor(Math.random()* randomIntA  );
console.log(randomIntB);


function indexSelector( array , numberA , numberB){
    for(let i = numberB; i < numberA ; i++){
        newArray.push(array[i]);
    }
    return newArray;
};

console.log(indexSelector(arrayMix, randomIntA, randomIntB));