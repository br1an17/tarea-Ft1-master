"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo
     y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad:
   el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado;
    en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par,
   busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;

}
function Node(value) {//8
  this.value = value;//8
  this.next = null;
}
LinkedList.prototype.add = function (value) {
  let node = new Node(value);//8
  //{ value:8, next:null  }

  if (!this.head) {
    this.head = node;//head{value:8,next:null}
  } else {
    let current = this.head;
    //{
    //value: 8, 
    //next:{value:2,next:null}}
    while (current.next) {
      current = current.next;
    }
    current.next = node;//{value:8,next:{value:2,next:null}}
  }
}
//let lista2 = new Linkedlist()
//lista2.add(8)
//lista2.add(2)

LinkedList.prototype.remove = function () {
  let current = this.head;//{value:8,next:null}

  if (!this.head) return null;

  else if (!current.next) { //!current.next === a poner null
    let valor = this.head.value;//8
    this.head = null;
    return valor;//8
  }
  let value = current.next.value;
  while (current.next.next) {
    current = current.next;
  }


  current.next = null// al declarar  igual null eliminamos al ultimo
  return value
}
//let lista2 = new Linkedlist()
//lista2.add(8)
//lista2.remove()





LinkedList.prototype.search = function (value) {
  let current = this.head;

  while (current) {
    if (current.value === value)//para ver si el valor del usuario es igual al valor del current
      return current.value;
    else if (typeof value === "function") {// para comprobar si el valor que nos dio el usuario es un callback o funcion
      if (value(current.value)) {
        return current.value;
      }
    }
    current = current.next;
  }

  return null;
}







/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets 
(slots, contenedores, o casilleros; es decir,
   posiciones posibles para almacenar la información),
    donde guardaremos datos en formato clave-valor 
   (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35).
 (Luego de haber pasado todos los tests, a modo de ejercicio adicional, 
  pueden modificar un poco la clase para que reciba la 
  cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato.
   Recibe un input alfabético, suma el código numérico de cada caracter del input 
   (investigar el método charCodeAt de los strings)
    y calcula el módulo de ese número total por la cantidad de buckets;
    de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), 
  hashea la clave invocando al método hash,
   y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y
   busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y
   consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla.
 Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora';
 luego, invocando set('instructora', 'Ani'),
  se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.newbuckets = [];
}

HashTable.prototype.hash = function (key) {
  let suma = 0;
  for (let i = 0; i < key.length; i++) {
    suma = suma + key.charCodeAt(i);
  }
  return suma % this.numBuckets;
}

HashTable.prototype.set = function (key, valor) {
  if (typeof key !== "string") throw TypeError('Keys must be strings');
  let i = this.hash(key);

  if (!this.newbuckets[i]) {// verifico si existe
    this.newbuckets[i] = {};
  }
  this.newbuckets[i][key] = valor;
  //this.newbuckets = []
  // i = 7 => newbuckets[7]
  //newbuckets [7] [brian] =  [ , , , , , , ,{brian= valor} , ]
}
HashTable.prototype.get = function (key) {
  let i = this.hash(key);//busca el valor que le corresponde en el bucket
  return this.newbuckets[i][key]//retorna si existe la clave
}

HashTable.prototype.hasKey = function (key) {
  let i = this.hash(key)//recibe una clave por parámetro yconsulta si ya hay algo almacenado en la tabla
  return this.newbuckets[i].hasOwnProperty(key);
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
