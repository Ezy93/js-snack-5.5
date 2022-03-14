/**
 * 
 * 
    Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
    es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

 * 
 */

    const numberArray = [1,2,3,4,5,6,7,8,9,10];
    const charArray = ["a","b", "c", "d", "e","f","g","H","r","k"];


    function arrayFusion(arrayA , arrayB){
            arrayA.forEach(element => {
            let fusion = arrayA.toString().concat(arrayB);
            return fusion;
        });
    };

    console.log(arrayFusion(numberArray , charArray))