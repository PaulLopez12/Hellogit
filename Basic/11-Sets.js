//Set
let mySet = new Set();

//Inicializar
mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet);

//Metodos comunes
mySet.add(6);   //Agrega un elemento al final
console.log(mySet); 

mySet.delete(6); //Elimina un elemento, se debe indicar el valor del elemento (retorna un boolean)
console.log(mySet);

mySet.has(3); //Verifica si un elemento existe en el set (retorna un boolean)
console.log(mySet.has(3));

console.log(mySet.size); //Retorna el tamaño del set

let myArray = Array.from(mySet); //Convierte un set en un array

mySet.add(3);
console.log(mySet); //No se pueden repetir elementos en un set