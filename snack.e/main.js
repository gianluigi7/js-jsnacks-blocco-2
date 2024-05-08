'use strict'

const arrayA =[1, 2, 3, 4, 5, 6, 7];
const arrayB = [];

function rimuoviDallaTesta(partenza) {
   
   let arrivo = [];

    for (let i = 1; i < partenza.length; i++) {

        arrivo[i] = partenza[i];
    }
        

    return arrivo;
    
    
}

console.log(rimuoviDallaTesta(arrayA));
