'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, 
como primer y segundo elementos de la misma, 
y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden 
intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/


function nFactorial(n) {
  
  if (n ===0 || n=== 1){
   return 1 //  condicion de parada
  } 
  return n * nFactorial(n-1) // continuacion
}


function nFibonacci(n) {
  if(n < 2 ){
    return n 
  }
    else { return nFibonacci(n - 1) + nFibonacci(n- 2)
    }
  // let array=[0,1]

  //  for(let i = 2 ; i < n + 1; i++){
  //    array[i] = array[i - 1] + array[i - 2]
  //   }
  //   return array[n]
  }
/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa 
es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue(e) {
  this.fila = [] // arreglo vacio 
 
   Queue.prototype.enqueue = function (elem){ // se declara funcion propotype que enqueue es una funcion que recibbira un elemento
    return this.fila.push(elem) // luego tomara ese elemento y lo pusheara en el arreglo
  
  }
    Queue.prototype.dequeue = function (elem){ //se declara funcion que recibe elemento como parametro
      if(this.fila === []){ //si el array esta vacio retorna undefined
        return undefined
      } return this.fila.shift(elem) // sino elimina del arreglo el elemento que se paso por parametro 
    
    }
    Queue.prototype.size = function (){ //retorna el tama;o que tiene el arreglo en este momento
     return this.fila.length
    }
  }
/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
