
    /* A - Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) */
    function stringReverse (stringa){
        
            let splString = stringa.split("");
            
            let revArray = splString.reverse();
            
            return revArray.join("");
            
        
    }

    console.log(stringReverse("giovanni"));

    /* B - Scrivi una funzione che accetti un numero come argomento e ritorni il suo opposto (inverso additivo) es (34 -> -34) */

    function oppositeNumber (number){
        return number - (number*2)
    }

    console.log(oppositeNumber(-10));

    /* C - Data una lista di 10 numeri e 10 stringhe, restituisci una copia della lista con tutte le stringhe girate e i numeri opposti. */


const stringhe = ["giovanni","riccardo","teseo","romolo","remolo","teodoro","franco","mafaldo","erwin","asterix"];
const numbers =[1,2,3,4,5,6,7,8,9,10];

stringhe.forEach(element => {
    return console.log(stringReverse(element));
});

numbers.forEach(element =>{
    return console.log(oppositeNumber(element));
})

