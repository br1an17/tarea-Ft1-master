'use strict'

function BinarioADecimal(num) {

  // tu codigo aca

 num = num.split("").reverse;

 var suma = 0;

 for(var i = 0 ; i< num.lenght; i++ ) { 
   
   suma = suma + 2**i*num[i];
}
return suma;
}

function DecimalABinario(num) {

  // tu codigo aca

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}