//Funciones
function myFuncion() {
    for (let i = 0; i < 5; i++) {
        console.log("Hola funcion");
    }
}

myFuncion();

//Con parametros
function myFuncion2(nombre) {
    console.log("Hola " + nombre);
}
myFuncion2("Paul");

//Funciones anonimas (se asigna a una variable)
const myFuncion3 = function () {
    console.log("Hola funcion anonima");
}
myFuncion3();

//Funciones flecha
const myFuncion4= (name) => console.log("Hola " + name);
myFuncion4("Paul");

//Parametros
function suma(a=0, b=0) { //Se inicializa para no romper el codigo
    return a + b;
}
console.log(suma(2, 3));

//Retorno de valores
function multiplicar(a=1, b=1) {
    return a * b;
}
let resultado = multiplicar(2, 3);
console.log(resultado);

//Funciones anidadas
function externa() {
    console.log("Externa");
    function interna() {
        console.log("Interna");
    }
    interna();
}
externa();

//Funciones de orden superior (recibe una funcion como parametro)
function myFuncion5(callback) {
    callback();
}
myFuncion5(function () {
    console.log("Hola desde callback");
});

//forEach
myArray = [1, 2, 3, 4, 5];
myArray.forEach(function (elemento) {
    console.log(elemento);
});