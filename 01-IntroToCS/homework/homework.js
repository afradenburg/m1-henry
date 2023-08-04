'use strict';

function BinarioADecimal(num) {

   let count = 0

   const invertido = num.split('').reverse('')


  const resultado = invertido.map((i, p)=> { 
    const multiplicacion = parseInt(i) * 2 **p
    count += multiplicacion 
})
return count
}

function DecimalABinario(num) {
   var binario = []
    
    while (num >= 1) { 
     let res = Math.trunc(num % 2)  // el metodo trunc redondea hacia arriba el resto y devuelve el entero  
    binario.unshift(res)
        
        num = num / 2; 
        
    }
    return binario.join("")
   
    
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
