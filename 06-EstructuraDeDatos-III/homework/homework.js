'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, 
  según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
  Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png
   dentro del directorio homework.
*/


function BinarySearchTree(value) {
   this.value = value;
   this.right = null;
   this.left = null;
}

BinarySearchTree.prototype.size = function(){
   let count = 1
   if(this.left){
      count ++ 
      this.left.size()
   }
   if(this.right){
      count ++ 
      this.right.size()
   }
   return count
}
BinarySearchTree.prototype.insert = function(value){
    let subTree = new BinarySearchTree(value)
    // si es menor a la izq.
   if(value< this.value){
    if(this.left === null){
        this.left= subTree;
    }else {
        this.left.insert(value)
    }
}
   //si es mayor a la derecha

   if(value> this.value){
    if(this.right === null){
        this.right= subTree
    }else {
        this.right.insert(value)
    }
}
}
BinarySearchTree.prototype.contains = function (value) {
   if (value === this.value) {
     return true;
   } else if (value < this.value) {
     if (this.left) {
       return this.left.contains(value);
     } else {
       return false;
     }
   } else if (value > this.value) {
     if (this.right) {
       return this.right.contains(value);
     } else {
       return false;
     }
   }
   return false;
 };
 

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
