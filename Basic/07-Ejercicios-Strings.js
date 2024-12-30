//1.Concatena dos cadenas de texto
console.log("UUIA" + "IIAAU");
//2.Muestra la longitud de una cadena de texto
console.log("UUIA".length);

//3.Muestra el primer y último caracter de una cadena de texto
let text = "UUIA";
console.log(text[0], text[text.length - 1]);

//4.Convierte a mayúsculas y minúsculas una cadena de texto
console.log("UUIA".toUpperCase());
console.log("UUIA".toLowerCase());

//5.Crea una cadena de texto en varias lineas
console.log(`UUIA
    IIAAU`);

//6.Interpola el valor de una variable en una cadena de texto
let name = "Paul";
console.log(`Hello, my name is ${name}`);

//7.Reemplaza los espacios en blanco de un string por guion
let text2 = "practicando para reemplazar espacios en blanco";
console.log(text2.replace(/ /g,"-"));

//8.Comprueba si una cadena de texto contiene una palabra
console.log(text2.includes("blanco"));

//9.Comprueba si dos strings son iguales
console.log("UUIA" === "IIAAU");

//10.Comprueba si dos strings tienen la misma longitud
console.log(text.length === text2.length);