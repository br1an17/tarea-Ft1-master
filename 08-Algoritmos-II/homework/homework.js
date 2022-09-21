'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) {
    return array;
  }

  let pivot = array.pop();
  let arrayi = [];
  let arrayd = [];
  let final = [];


  for (let i = 0; i < array.length; i++)
    if (array[i] <= pivot) {
      arrayi.push(array[i])
    } else {
      arrayd.push(array[i])
    }
  return final.concat(quickSort(arrayi), pivot, quickSort(arrayd));



}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:




  if (array.length <2) {
    return array;
      }

      var mitad = Math.floor(array.length/2);

      var left = array.slice(0,mitad)
      var right = array.slice(mitad)


      return marge(mergeSort(left),mergeSort(right));}


function marge(left,right) {

   var final=[];
   var  iz =0;
   var  der =0;

   while(iz < left.length && der < right.length) {

   if (left[iz] < right[der]) {

     final.push(left[iz++]);
   
}else{

final.push(right[der++]);

 }
}

return final.concat(left.slice(iz)).concat(right.slice(der))}
 







// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
