//Operadores

//Operadores Aritméticos
let a = 5;
let b = 10;
console.log(a+b) //Suma
console.log(a-b) //Resta
console.log(a*b) //Multiplicación
console.log(a/b) //División

console.log(a%b) //Módulo
console.log(a**b) //Potencia

a++
console.log(a) //Incremento

b--
console.log(b) //Decremento

//Operadores de Asignación
let myVar = 2;
console.log(myVar);
myVar += 2;
console.log(myVar);

myVar -= 2;
myVar *= 2;
myVar /= 2;
myVar %= 2;
myVar **= 2;

//Operadores de Comparación
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b) //igualdad por valor
console.log(a===b) //igualdad por valor y tipo
console.log(a!=b)  
console.log(a!==b)

/*TRUTHY values
Todos los enteros menos el cero
Todas las cadenas de texto menos las vacias
El boolean true*/

/*FALSY values
0
0n
null
undefined
NaN
El boolean false
cadenas de texto vacias*/

//Operadores logicos
//and(&&)
console.log(5>10 && 15>20) 
console.log(5<10 && 15<20)
console.log(5<10 && 15>20)

//or(||)
console.log(5>10 || 15>20)
console.log(5<10 || 15>20) 
console.log(5>10 || 15<20)

//not(!)
console.log(!(5>10 && 15>20))
console.log(!(5>10 || 15>20))

//Operador ternario
const isRaining = true;
isRaining ? console.log('Esta lloviendo') : console.log('No esta lloviendo')
