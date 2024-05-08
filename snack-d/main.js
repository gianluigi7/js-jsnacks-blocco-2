'use strict'

const arrayA =[1, 2, 3, 4, 5, 6, 7];
const arrayB = [];

function rimuoviDallaCoda(partenza) {
 
   let arrivo;

    for (let i = 0; i < partenza.lenght -1; i++) 
        
        partenza[i] = arrivo[i];

    return arrivo;
    
    
}

console.log(rimuoviDallaCoda(arrayA));



