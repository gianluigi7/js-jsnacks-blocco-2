'use strict'

const array = [1, 2, 3, 4, 5, 6, 7];
const input = 3;
const inputFalse = 8;

function trovaIndice(array, elemento) {
    let arrayLength = array.length;

    for  (let i = 0; i < arrayLength; i++) {
       console.log(array[i]);
       
       if (array[i] === elemento) {
         return i;
        }
      }
     
    return '-1';
}

console.log(trovaIndice(array, input));


