'use strict'

function BinarioADecimal(num) {

  // tu codigo aca

 num = num.split("").reverse();

 var suma = 0;

 for(var i = 0 ; i< num.length; i++ ) { 
   
   suma = suma + 2**i*num[i];
}
return suma;
}

function DecimalABinario(num) {
  var suma=[];

    while(num !== 0)
    {suma.unshift(num%2)
    num= Math.floor(num/2)}
   return suma.join("")

    
  

  
} 



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}