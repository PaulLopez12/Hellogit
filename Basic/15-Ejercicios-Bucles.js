//1.Crea un bucle que imprima numeros del 1 al 20
for (let i=1; i<=20; i++){
    console.log(i);
}

//2.Crea un bucle que sume los numeros del 1 al 100 e imprime el resultado
let suma = 0;
for (let i=1; i<=100; i++){
    suma += i;
}
console.log(suma);

//3.Crea un bucle que muestre los numeros pares del 1 al 50
for (let i=1; i<=50; i++){
    if (i%2 === 0){
        console.log(i);
    }
}

//4.Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const nombres = ['Juan', 'Maria', 'Pedro', 'Ana', 'Luis'];
for (let i=0; i<nombres.length; i++){
    console.log(nombres[i]);
}

//5.Escribe un bucle que cuente el numero de vocales en una cadena de texto
const texto = 'Hola mundo';
let contador = 0;
for (let i=0; i<texto.length; i++){
    if (texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u'){
        contador++;
    }
}
console.log(`La frase tiene ${contador} vocales`);

//6.Dado un array de numeros, crea un bucle para multiplicar todos los numeros y mostrar el resultado
const numeros = [2, 3, 4, 5];
let producto = 1;
for (let i=0; i<numeros.length; i++){
    producto *= numeros[i];
}
console.log(producto);

//7.Escribe un bucle que imprima la tabla del 5
for (let i=1; i<=12; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
//8.Usa un bucle para invertir una cadena de texto
let cadena = 'Hola mundo';
let cadenaInvertida = '';
for (let i=cadena.length-1; i>=0; i--){
    cadenaInvertida += cadena[i];
}
console.log(cadenaInvertida);

//9.Usa bucle para generar los primeros 10 numeros de la serie de Fibonacci
let a = 0;
let b = 1;
let c;
for (let i=0; i<10; i++){
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}

//10.Dado un array de numeros, usa bucle para crear otro array que tenga los numeros mayores a 10
const numeros2 = [5, 10, 15, 20, 25];
let numerosMayores = [];
for (let i=0; i<numeros2.length; i++){
    if (numeros2[i] > 10){
        numerosMayores.push(numeros2[i]);
    }
}
console.log(numerosMayores);
