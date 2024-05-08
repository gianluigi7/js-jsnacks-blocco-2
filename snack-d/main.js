'use strict'

const arrayA =[1, 2, 3, 4, 5, 6, 7];
const arrayB = [];

function rimuoviDallaCoda(partenza) {
   
   let arrivo = [];

    for (let i = 0; i < partenza.length -1; i++) {

        arrivo[i] = partenza[i];
    }
        

    return arrivo;
    
    
}

console.log(rimuoviDallaCoda(arrayA));



