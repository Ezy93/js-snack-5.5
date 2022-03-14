/**
 * Crea un array di 10 oggetti che rappresentino una zucchina.
 * indicando per ognuna varietà, peso e lunghezza.
 *
 * A - Calcola quanto pesano tutte le zucchine
 * B - Dividi in due array separati le zucchine che misurano più o meno di 15cm
 * C - Stampa separatamente quanto pesano i due gruppi di zucchine
 *
 * */

const zucchine = [
    {
        varietà : "nigeriana",
        peso : 3,
        lunghezza : 25,
    },
    {
        varietà : "italiana",
        peso : 2,
        lunghezza : 18,
    },
    {
        varietà : "francese",
        peso : 1,
        lunghezza : 12,
    },
    {
        varietà : "tedesca",
        peso : 1.3,
        lunghezza : 15,
    },
    {
        varietà : "asiatica",
        peso : 0.9,
        lunghezza : 10,
    },
    {
        varietà : "spagnola",
        peso : 0.8,
        lunghezza : 12,
    },
    {
        varietà : "madagascar",
        peso : 2,
        lunghezza : 22,
    },
    {
        varietà : "russa",
        peso : 1.5,
        lunghezza : 16,
    },
    {
        varietà : "etiope",
        peso : 3,
        lunghezza : 25,
    },
    {
        varietà : "inglese",
        peso : 1.3,
        lunghezza : 13,
    },
]

/* A - Calcola quanto pesano tutte le zucchine
* B - Dividi in due array separati le zucchine che misurano più o meno di 15cm
* C - Stampa separatamente quanto pesano i due gruppi di zucchine */

let Totale = 0;

let pesoZucchineMature = 0;
const zucchineMature = [];
let pesoZucchineAcerbe = 0;
const zucchineAcerbe = [];

zucchine.forEach((element) => {
    Totale += element.peso;
    console.log(Totale)
    if(element.lunghezza >= 15){
        zucchineMature.push(element);
        pesoZucchineMature+=element.peso;
    }else{
        zucchineAcerbe.push(element);
        pesoZucchineAcerbe+= element.peso;
    }

});

console.log(pesoZucchineMature,pesoZucchineAcerbe,zucchineMature,zucchineAcerbe)