//Funciones avanzadas

//Ciudadanos de primera clase (una funcion es un valor, se puedo guardar en una variable)

const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet("Paul")

//Funciones de orden superior (una funcion que recibe otra funcion como argumento)
function procesarSaludo(funcionSaludo, nombre) {
    funcionSaludo(nombre)
}

function regresarSaludo(nombre) {
    return greet
}

procesarSaludo(greet, "Juan")

const greet2 = regresarSaludo()
greet2("Pedro")

//Arrow functions avanzadas
// - retorno implicito
const multiplicar = (a, b) => a * b
console.log(multiplicar(2, 3))

// - this léxico aplicando arrow functions
const handler = {
    name: 'Federico',
    greeting: function() {
        console.log(`Hola, ${this.name}`)
    },
    arrowgreeting: () => {
        console.log(`Hola, ${this.name}`) //this no funciona en arrow functions, crean su propio contexto
    }
}
handler.greeting()
handler.arrowgreeting();

//IIFE (Immediately Invoked Function Expression), funciones que se ejecutan inmediatamente despues de ser definidas
// - IIFE clasico
(function(){
    console.log("IIFE clásico")
})();//Toma el contexto global, de todo el fichero, da error al ejecutar así, necesita un ; antes de definirla

// - IIFE con arrow function
(() => {
    console.log("IIFE con arrow function")
})();

//Parametros Rest (...) genera un array con los argumentos que se le pasen a la funcion
function sum(...numbers) {
        let result = 0
        for (let number of numbers) {
            result += number
        }
        return result
    }
console.log(sum(1,2,3,4,5))
console.log(sum(10,20,30))

//Operador Spread (...) expande un array en elementos individuales
const numbers = [1,2,3,4,5]
function sumWithSpread(a,b,c,d,e) {
    return a + b + c + d + e
}
console.log(sumWithSpread(1,2,3,4,5))//Sin spread
console.log(sumWithSpread(...numbers))//Con spread

//Closures (una funcion que recuerda el entorno en el que fue creada)
function createCounter(){
    let counter = 0
    return function(){
        counter++
        console.log(`Contador: ${counter}`) 
    }  
}
const counter = createCounter()
counter()
counter()

const counter2 = createCounter()
counter2()
counter2()

//Recursividad (una funcion que se llama a si misma)
function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n-1)
}
console.log(factorial(5)) // 120

//Funciones parciales (crear una nueva funcion con algunos argumentos predefinidos)
function partialSum(a) {
    return function(b,c) {
        return sum(a,b,c)
    }
}
const sumWith = partialSum(10)
console.log(sumWith(20,30))

//Currying (transformar una funcion con multiples argumentos en una secuencia de funciones que reciben un solo argumento)
function currySum(a) {
    return function(b) {
        return function(c) {
            return sum(a,b,c)
        }
    }
}

console.log(currySum(10)(20)(30)) // 60
const add10 = currySum(10)
const add10And20 = add10(20)
console.log(add10And20(30)) // 60

//Callback functions (una funcion que se pasa como argumento a otra funcion y se ejecuta dentro de esa funcion)
function processData(data, callback) {
    const result = sum(...data)
    callback(result)
}

function processResut(result){
    console.log(`El resultado es: ${result}`)
}
processData([1,2,3,4,5],processResut)
processData([1,2,3,4,5], (result) => {
    console.log(`El resultado con arrow function es: ${result}`)
})