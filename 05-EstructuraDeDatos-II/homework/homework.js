'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() { //se inicializa la linkedlist 
  // Tren
  this.head = null; // Locomotora e le da valor a la cabeza
  this._length = 0; // se le da un tama;o en 0 ya que no tiene nada aun
}

function Node(value) { // se inicializan los nodos que sera los vagones 
  // Vagones
  this.value = value; // tendra un valor que se le pasara por parametro
  this.next = null; // se asiga un puntero que va hacia next de momento
}

LinkedList.prototype.add = function (valor) { //funcion para añadir nodos a la linkedlist
  let newNode = new Node(valor);  // el valor  que se recibe por parametro se convierte en vagon (con su valor y su puntero)
  let current = this.head; // current o actual se define como el inicio de la linkedlist y nos servira para recoirrer la lista

  // insetar un valor en lista vacia
  //this.head === null
  // this._length === 0
  if (!this.head) { // esto es lo mismo que decir que si this.head es null (si se cumple la conmficion)
    this.head = newNode; //entonces this.head va a ser newnode (osea el valor que le agregamos)
    this._length++; //se aumenta su lingitud
  } else {
    // insertar un valor en el ultimo nodo de una lista con mas de 1 elemento
    while (current.next !== null) { //com while la condicion para que siga es (mientras exista un nodo al que apuntad se ejecura)
      // current.next
      current = current.next; // recorre hasta terminar la condicion
    }
    current.next = newNode; // al terminar y saber que el siguiente current.next es null agregamos el nreNodo que nos dieron por parametro
    this._length++;// se aumenta la lontitud
  }
};

LinkedList.prototype.remove = function () { //funcion para remover nodo
  let current = this.head; // se declara puntero como el inicio para recorrer

  
  if (this._length === 0) return null; // Retorna null si la lista esta vacia
  if (this._length === 1) { // si solo queda 1 nodo(this.head)
    let aux = current.value; //guardamos el valor que existe 
    this.head = null; // ahora no quedaran elementos
    this._length--; // disminuimos la longitud
    return aux; //retornamos el valor que quitamos
  }

  while (current.next.next) { // mientras exista un nodo en las 2 pocisiones siguientes
    current = current.next; //recoremos y avanzamos 
  }
  /// Sacar ultimo nodo y devolverlo
  let aux = current.next.value; //al terminar el while porque no se cumple la condicion sacamos el valor del ultimo nodo

  current.next = null; //eliminamos el valor del ultimo nodo al que apuntamos
  this._length--; //diosminuimos la longitud

  return aux; //retornamos el valor que eliminamos
};

LinkedList.prototype.search = function (value) {
  let current = this.head; // declaramos el nodo actual(el inicio del linkedlist)

  if (!current) return null; //si no hay nada en la linkedlist retornamos null

  while (current) { //while condicion (mientras haya un valor en curent)
    if (current.value === value) return current.value; //si el valor del current es igual al valor que nos dieron por parametro, retornamos su valor
    if (typeof value === "function") { // si el tipo de valor que nos enviaron es una funcion
      if (value(current.value)) { // lalamamos la funcion y le damos como parametro el valor que tiene el current en este momento
        return current.value; // retornamos el valor
      }
    }
    current = current.next; // le damos a current el valor del siguiente nodo
  }
  return null; 
};



/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() { //cremoas la hashtable que es donde vamos a almanecar los datos codificados
  this.buckets = []; //{gama: gama@gmail.com})
  this.numBuckets = 35; //se le asiga 35 posiciones ya que el ejercicio no lo pide
}

HashTable.prototype.hash = function (key) { //la funcion hash es la que nos dira enq ue pocision 
  // "gama"

  let suma = 0;

  for (let i = 0; i < key.length; i++) {
    //                                 g    a   m    a
    console.log(key.charCodeAt(i));

    suma += key.charCodeAt(i); // 406
    console.log(suma);
  }

  //                    35
  console.log(suma % this.numBuckets);
  return suma % this.numBuckets; // ---> Indice
};

HashTable.prototype.set = function (key, value) {
  //gama ,gama@gmail.com

  if (typeof key !== "string") throw TypeError("Debe ser un string");

  let index = this.hash(key);

  if (this.buckets[index] === undefined) {
    // buckets[{21:{}}]
    this.buckets[index] = {};
  }
  // if (this.hasKey) return "ya existe ese usuario";

  // buckets[{21:{gama:gama@gmail.com, maga:maguito}}]
  this.buckets[index][key] = value;
};

HashTable.prototype.get = function (key) {
  // maga
  let index = this.hash(key);

  if (this.buckets[index][key]) {
    return this.buckets[index][key];
  }

  return "Aqui no hay nada";
};

HashTable.prototype.hasKey = function (key) {
  // gama ===>>> true o false
  let index = this.hash(key);

  return this.buckets[index].hasOwnProperty(key);
};




// No modifiquen nada debajo de esta linea
// --------------------------------
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
