//1.Crea un array que almacene 5 animales
let animales = ['perro', 'gato', 'pez', 'tortuga', 'conejo']
console.log(animales)

//2.Añade dos más, uno al principio y otro al final
animales.unshift('loro')//al principio
animales.push('caballo')//al final
console.log(animales)

//3.Elimina el que se encuentra en la posicion 3
animales.splice(3, 1)
console.log(animales)

//4.Crea un set que almacene 5 libros
let libros = new Set(['libro1', 'libro2', 'libro3', 'libro4', 'libro5'])
console.log(libros)

//5.Añade dos más, uno de ellos repetido
libros.add('libro6')
libros.add('libro6')
console.log(libros)

//6.Elimina un libro cualquiera
libros.delete('libro3')
console.log(libros)

//7.Crea un mapa que asocie el numero del mes con su nombre
let meses = new Map([
    [1, 'Enero'],
    [2, 'Febrero'],
    [3, 'Marzo'],
    [4, 'Abril'],
    [5, 'Mayo'],
    [6, 'Junio'],
    [7, 'Julio'],
    [8, 'Agosto'],
    [9, 'Septiembre'],
    [10, 'Octubre'],
    [11, 'Noviembre'],
    [12, 'Diciembre']
])
console.log(meses)

//8.Comprueba si el mes numero 5 existe en el mapa e imprime el valor
console.log(meses.has(5))

//9.Añade al mapa una clave con un array como que almacene los meses de verano
meses.set('Verano', ['Junio', 'Julio', 'Agosto'])
console.log(meses)

//10.Crea un array, transformalo a set y almacenalo en un mapa
let array = ['a', 'b', 'c', 'd', 'e']
let set = new Set(array)
let mapa = new Map()
mapa.set('Set', set)
console.log(mapa)
