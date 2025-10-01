// 1. Crea una función que retorne a otra función
const sumar = (a,b) => a + b;
console.log(sumar(2,3)); // 5
// 2. Implementa una función currificada que multiplique 3 números
function curryMultiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        }
    }  
}
console.log(curryMultiply(2)(3)(4)); // 24

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function potencia(base, exponente){
    if (exponente === 0) {
        return 1;
    }
    return base * potencia(base, exponente - 1);
}
console.log(potencia(2, 3)); // 8

// 4. Crea una función createCounter() que reciba un valor inicial y 
// retorne un objeto con métodos para increment(), decrement() y getValue(), 
// utilizando un closure para mantener el estado.
function createCounter(valorInicial) {
    let counter = valorInicial;
    return {
        increment: function() {
            counter++;
        },
        decrement: function() {
            counter--;
        },
        getValue: function() {
            return counter;
        }
    };
}
const myCounter = createCounter(10);
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue()); // 12
myCounter.decrement();
console.log(myCounter.getValue()); // 11


// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números 
// (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum * multiplier;
}
console.log(sumManyTimes(2, 1, 2, 3)); // (1+2+3)*2 = 12

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se 
// le pasan a una función
function sumWithCallback(callback, ...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    callback(sum);
}
sumWithCallback(function(result) {
    console.log("El resultado de la suma es: " + result);
}, 1, 2, 3, 4, 5); // El resultado de la suma es: 15


// 7. Desarrolla una función parcial
function partialproduct(a) {
    return function(b,c) {
        return a * b * c;
    }
}
const productWith = partialproduct(2);
console.log(productWith(3,4)); // 24   

// 8. Implementa un ejemplo que haga uso de Spread
const array1 = [1, 2, 3];
function multiplyWithSpread(a, b, c) {
    return a * b * c;
}
console.log(multiplyWithSpread(...array1)); // 6

// 9. Implementa un retorno implícito
const resta = (a, b) => a - b;
console.log(resta(5, 3)); // 2

// 10. Haz uso del this léxico
const obj = {
    value: 100,
    showValue: function() {
        const innerFunction = () => {
            console.log(this.value);
        }
        innerFunction();
    }
};
obj.showValue(); // 100
