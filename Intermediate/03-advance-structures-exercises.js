// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
let names = ['Paul', 'Juan','Carlos']
let mapedNames = names.map(element => element.toUpperCase())
console.log(mapedNames)

let filteredNames = names.filter(element => element.includes('J'))
console.log(filteredNames)

let reducedNames = names.reduce((empty, element) => empty + ' ' + element, '')
console.log(reducedNames)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra 
//    sólo los números pares
let numbers = [2, 4, 7, 3, 9]
let cubedNumbers = numbers.map(element => element **3)
let evenCubedNumbers = cubedNumbers.filter(element => element % 2 === 0)
console.log(evenCubedNumbers)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
let newArray = ['Paul', ['Jair', 'Felipe', ['Ana', 'Maria']]]
let flatedArray = newArray.flat(2)
console.log(flatedArray)
let flatedMapedArray = flatedArray.flatMap(element => element.toUpperCase())
console.log(flatedMapedArray)

// 4. Ordena un array de números de mayor a menor
let sortedArray = numbers.sort((a,b) => b - a)
console.log(sortedArray)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const setA = new Set(['Paul', 'Jair', 'Felipe'])
const setB = new Set(['Jair', 'Ana', 'Maria'])

const union = new Set([...setA, ...setB])
console.log(union)

const intersection = new Set([...setA].filter(element => setB.has(element))) 
console.log(intersection)

const difference = new Set([...setB].filter(element => !setA.has(element)))
console.log(difference)

// 6. Itera los resultados del ejercicio anterior
union.forEach(element => console.log(element))
intersection.forEach(element => console.log(element))
difference.forEach(element => console.log(element))
    
// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
let datos = new Map([
    ['name', 'Paul'],
    ['age', 27],
    ['email', 'Z@gmail.com']
])
datos.forEach((value, key) => console.log(`${key}: ${value}`))

// 8. Dado el mapa anterior, crea un array con los nombres
let datosArray = Array.from(datos)
let namesArray = datosArray.filter(element => element[0] === 'name').map(element => element[1])
console.log(namesArray)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad
//    y transfórmalo a un set
let ageArray = datosArray.filter(element => element[0] === 'age' && element[1] >= 18).map(element => element[1])
let emailArray = datosArray.filter(element => element[0] === 'email' && ageArray.length > 0).map(element => element[1])
let emailSet = new Set(emailArray)
console.log(emailSet)


// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con 
//     clave el email de cada usuario y como valor todos los datos del usuario
let datosObject = Object.fromEntries(datos)
console.log(datosObject)

let emailKeyMap = new Map(Object.entries({[datosObject.email]: datosObject}))
console.log(emailKeyMap)