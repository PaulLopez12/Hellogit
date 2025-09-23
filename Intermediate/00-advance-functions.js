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

//Parametros Rest