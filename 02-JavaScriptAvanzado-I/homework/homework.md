# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; // se imprime 1 
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // el resultado seria 10
   console.log(a); // el resultado seria 8
   var f = function (a, b, c) {
      b = a;  // el valor que tomaria es 8 porque es el argumento que recibe mas abajo
      console.log(b); // se imprime 8 como valor de referencia tomado de a mas abajo
      b = c; // 10 el valor que se imprime seria 10 porue lo toma de referencia mas abajo del argumento que se paso en c
      var x = 5; // imprimiria 10 
   };
   f(a, b, c); // a = , b = 9, c = 10
   console.log(b); // 9
};
c(8, 9, 10);
console.log(b); //10
console.log(x); //1
```

```javascript
console.log(bar); // con var es undefined por hoisting, tratando de mostrar una variable que aun no se ha inicializado ... con let  error
console.log(baz); // con baz nos da error porque no existe la variable
foo(); // hace hoisting  y va  aimprimir Hola   
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); //Franco
```

```javascript
var instructor = 'Tony';
console.log(instructor); // tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // franco
   }
})();
console.log(instructor); //tony
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // f;lash
   console.log(pm); //reverse flash
}
console.log(instructor); // the flash // var no esta por el scope de bloque
console.log(pm); // frank
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // "$45"
"4" - 2 //2
"4px" - 2 //NAN
7 / 0 // infinity
{}[0] // undefined
parseInt("09") // imrpime 9 es conversion no coercion 
5 && 2 // nos da 2 porque los dos son true y nos devuelve el de la derecha que es el ultimo encomparar
2 && 5 // 5
5 || 0 //5
0 || 5 // 5
[3]+[3]-[10] //concatena  [3]+[3] = 33 - [10] = 23
3>2>1 // 3>2 true y true > 1 F= false
[] == ![] // true, si la comparacion fuera estricta === seria false
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined
   console.log(foo()); // 2 , porque las funciones declaradas hacen hoisting

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false); // undefined
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // aurelio de rosa

var test = obj.prop.getFullname;

console.log(test()); // undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // se imprime 1 directamente
   setTimeout(function () {
      console.log(2); // settimeout debera esperar 1 segundo
   }, 1000);
   setTimeout(function () {
      console.log(3); // aunque sea cero el tiempo de espera se pone en cola de callback Queue
   }, 0);
   console.log(4); / se imprime directamente
}

printing(); // == 1, 4, 3, 2
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
