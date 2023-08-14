'use strict';
/// convierte un numero binario que te pasaran como string a un numero decimal entero y retornalo como numero
function BinarioADecimal(num) {

   let count = 0 //iniciamos un contador para almacenar el dato final

   const invertido = num.split('').reverse('') // split divide un string y lo convierte en array y reverse invierte los elementos y los devuelve
//la forma de convertir un numero binario a decimal es tomando el numero multiplicado por 2 y elevado a la potencia de la pocision qen la que este

  const resultado = invertido.map((i, p)=> {  // se crea un resultado que en este caso es un array donde se recorrera con map, i= indice y p= pocision
    const multiplicacion = i * 2 **p
    count += multiplicacion // el conntador va a ser igual a la multriplicacion mas lo que tenga almanecado
})
return count // se retorna el numero decimal
}
//pasa un numero decimal a un numero binario
function DecimalABinario(num) {
   var binario = [] // iniciamos unn array vacio
    
    while (num >= 1) {  //while en sus (mientras la condicion) 
     let res = Math.trunc(num % 2)  // el metodo trunc redondea hacia arriba el resto y devuelve el entero  
    binario.unshift(res) // agrega al inicio del array el valor (res)
        
        num = num / 2;  //para que el numero cambie en la siguiente iteracion se divide entre 2 y asi no quedar en bucle infinito
        
    }
    return binario.join("") //retorna uniendo todos los elementos y quedando como un string
   
    
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
