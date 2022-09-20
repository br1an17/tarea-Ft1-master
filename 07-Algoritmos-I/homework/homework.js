'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  
  var final = [1];

  for (var b = 2; b < num + 1; b++) {

    if (num % b === 0) {


      final.push(b);
      num = num / b;
      b = b - 1;
    }
  }
  return final;
}


  

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  

	for(var i=0; i<array.length; i++) {

		for(var j=0; j< array.length; j++) {
			if(array[j] > array[j+1]){
				var elegir = array[j];
		 		array[j] = array[j+1]
				array[j+1] = elegir;
				
			}
		}
	}

	return array;


}







function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:


	for(var i=1; i<array.length; i++) {
		var j = i;
		
		while(j>0 && array[j-1] > array[j]) {
			var arrayfinal = array[j-1];
			array[j-1] = array[j];
			array[j] = arrayfinal;
			j--;
		}
	}
	return array;	
// 

	
//[5,3,4,1]

// for(var i=0; i<array.length; i++)
// let j =i
//  while(      )


}



function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:


//   for(var i=0; i<array.length; i++) {

// 	for(var j=0; j< array.length; j++) {
// 		if(array[j] > array[j+1]){
// 			var elegir = array[j];
// 			 array[j] = array[j+1]
// 			array[j+1] = elegir;
			
// 		}
// 	}
// }

// return array; 
 for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
		if (array[j] > array[j + 1]) {
		  [array[j], array[j + 1]] = [array[j + 1], array[j]];
		}
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
