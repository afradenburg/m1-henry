'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //  [ 7 , 2 , 8 , 5 , 3 , 9 , 4  ]
  //
  //  if([1]) => devuelvo el array
  // let pivote = Math.random() --->>> chequen que el valor del indice este dentro del array
  // recorrer el array i < pivote lo mando a la izq[] si i > pivote lo mando a la derecha[]
  //             [1]          [1]
  // quickSort(izq)   quickSort(der)
  // return el array ordenado

  if (array.length <= 1) return array;
  let pivote = array[Math.floor(Math.random() * array.length) ];
  let aIzq = [];
  let aDer = [];
  let equal =[];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivote) {
      aIzq.push(array[i]);
    } else if (array[i] > pivote) {
      aDer.push(array[i]);
    } else {
      equal.push(array[i])
    }
  }
  return quickSort(aIzq).concat(equal).concat(quickSort(aDer));
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //okey probemos ahora
  //  [ 7 , 2 , 8 , 5 , 3 , 9 , 4  ]
  if (array.length <= 1) return array; // if( [1] ) => return array
  let izq = [];
  let der = [];

  let aux = array.length / 2;
  Math.round(aux);
  console.log(aux);
  for (let i = 0; i < array.length; i++) {
    if (i < aux) {
      izq.push(array[i]);
    }
    if (i >= aux) {
      der.push(array[i]);
    }
  }
  array = [];
  izq = mergeSort(izq);
  der = mergeSort(der);
  //  izq[]    |    der[]
 
  while(izq.length && der.length)
  if(izq[0] < der[0]){
    array.push(izq.shift())
  } else {
    array.push(der.shift())
  }

  return array.concat(izq,der)
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
