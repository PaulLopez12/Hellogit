//Estructuras avanzadas

//Arrays avanzados

// - Métodos

//forEach (dentro de array) 
let numbers = [1, 2, 3, 4, 5]
numbers.forEach(element => console.log(element * 2))

// map (dentro de array) (aplica una función a cada elemento del array)
let tripled = numbers.map(element => element * 3)
console.log(tripled)

// filter
let filtered = numbers.filter(element => element%2 === 0)
console.log(filtered)

// reduce (reduce el array a un solo valor)
let sum = numbers.reduce((result, current) => result + current, 0)
console.log(sum)

// - Manipulación

// flat (aplana un array de arrays) (se le pasa la profundidad o numero de anidaciones 
// como parámetro)
let nestedArray = [1, 2, [3, 4], [5, 6]]
let flated = nestedArray.flat(1)
console.log(flated)

// flatMap (combina map y flat) (aplica una función a cada elemento y luego aplana el array)
let phrases = ['Hola mundo', 'Adios mundo']
let words = phrases.flatMap(phrase => phrase.split(' '))
console.log(words)

// - Ordenación 
let unsorted = [3, 4, 1, 6, 10]
let sorted = unsorted.sort((a,b) => a - b) //".sort() ordena alfabéticamente por defecto"
console.log(sorted)

// reverse
sorted.reverse()
console.log(sorted)

// - Búsqueda

// includes (devuelve true si el elemento está en el array)
console.log(sorted.includes(4))

// find (devuelve el primer elemento que cumple la condición)
let finded = sorted.find(element => element % 2 === 0)
console.log(finded)

// findIndex (devuelve el índice del primer elemento que cumple la condición)
let position = sorted.findIndex(element => element % 2 === 0)
console.log(position)

// Sets avanzados

// - Operaciones

//Eliminación de duplicados en un array
let numbersArray = [1, 2, 2, 3, 4, 4, 5, 6, 6]
numbersArray = [...new Set(numbersArray)] //Spread para convertir el set en array
console.log(numbersArray)

// Union
const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
console.log(union)

// Intersección
const intersection = new Set([...setA].filter(x => setB.has(x)))
console.log(intersection)

//Diferencia
const difference = new Set([...setA].filter(x => !setB.has(x)))
console.log(difference)