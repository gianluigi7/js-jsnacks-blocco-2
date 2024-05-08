'use strict'

const array = [1, 2, 3, 4, 5, 6, 7];
const input = 3;
const inputFalse = 8;

function trovaIndice(array, elemento) {
 
    for  (let i = 0; i<array.length && !elemento; i++) {
       console.log(array[i]);
      }
      
      if (array[i] === elemento) {
        return console.log(array.lenght);
      }
     
    return '-1';
}

trovaIndice(array, input);


