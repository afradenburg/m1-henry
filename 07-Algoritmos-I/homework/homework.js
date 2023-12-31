'use strict'

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factores=[1]
  let divisor= 2

while(num !== 1){
  if(num % divisor === 0){
    factores.push(divisor)
    num /= divisor
  } else {
    divisor++
  }
}
return factores
}

function bubbleSort(array) {
// Implementar el método conocido como bubbleSort para ordenar de menor a mayor
// el array recibido como parámetro
// Devolver el array ordenado resultante
// Tu código:
 let changes = true
 while(changes){
    changes = false
    for(let i = 0; i < array.length - 1; i++){
   if(array[i] > array[i + 1] ) {

      let aux= array[i];
      array[i]=array[i + 1];
      array[i + 1]=aux;
      changes= true
    }
     }
    }
    return array
  }

//     for(let i = 0 ; i < array.length - 1 ; i++){
// for(let j = 0 ; j< array.length - i - 1 ; j++)
// if(array[j]>array[j + 1]){
//   const aux= array[j];
//   array[j]=array[j +1];
//   array[j+1]=aux;
// } 
// }
// return array
// }
// Tu código tiene algunos problemas y pueden mejorarse para que funcione correctamente:

// 1. Dentro del segundo bucle `for`, debes asegurarte de que `j` 
// no exceda el tamaño del array. Puedes ajustar la condición `j 
// < array.length` a `j < array.length - i - 1`. Esto es porque después de cada iteración 
// del bucle exterior, el elemento más grande se mueve al final del array, 
// por lo que ya no necesitas comparar los últimos elementos.

// 3. El bucle exterior `for` debe ejecutarse hasta `array.length - 1` en lugar de `array.length`.
//  Esto es porque después de `array.length - 1` iteraciones, los elementos restantes ya estarán ordenados.






function insertionSort(array) {
  // Implementar el método conocido como insertionSort 
  //para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
for(let i = 1 ; i < array.length ; i++){
  let j = i -1
  let aux = array[i]
    while(j >= 0 && aux < array[j] ){
      array[j + 1] = array[j]
      j--
     }
     array[j+1] = aux
  }
  return array
}


  function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    //  [6 ,  3 ,  4 ,  5  ,  8  ,  1,  7  , 11]
    //   i
    //        j
    // min < j
  
    // si termine de recorrer el array coloco el valor min en la posicion de i
    // recorro ambos marcadores
    // ocupen 2 for
    for (let i = 0; i < array.length; i++) {
      let min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      if (i !== min) {
        let aux = array[i];
        array[i] = array[min];
        array[min] = aux;
      }
    }
  
    return array;
  }




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
