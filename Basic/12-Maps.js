//Map, formado por dupas de clave e valor
let myMap = new Map();
console.log(myMap);

//Inicializar
myMap = new Map([
    ['1', 'uno'],
    ['2', 'dos'],
    ['3', 'tres']
])
console.log(myMap);

//Metodos y propiedades
myMap.set('4', 'cuatro'); //Añadir un nuevo elemento o actualizar uno existente, no se repiten claves

//get
myMap.get('1'); //Devuelve el valor de la clave 1

//has
myMap.has('1'); //Devuelve true si la clave existe

//delete
myMap.delete('1'); //Elimina el elemento con clave 1 y la clave 1

//clear
myMap.clear(); //Elimina todos los elementos

//keys
console.log(myMap.keys()); //Devuelve un objeto iterable con las claves

//size
console.log(myMap.size); //Devuelve el tamaño del map

//entries
console.log(myMap.entries()); //Devuelve un objeto iterable con las duplas clave-valor