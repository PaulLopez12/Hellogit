//Strings (para guardar y manipular texto)
let myName = "Paul";
let greeting = "Hello, my name is " + myName; //Concatenar texto
console.log(greeting);
console.log(typeof greeting);

//Longitud
console.log(greeting.length);

//Acceso a caracteres
console.log(greeting[10]);

//Métodos comunes
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf("Paul")); //Posición de la primera ocurrencia
console.log(greeting.includes("Paul")); //Si existe la cadena
console.log(greeting.slice(0, 5)); //Extraer una parte de la cadena
console.log(greeting.replace("Paul", "Frank")); //Reemplazar una cadena

//Template literals strings (Strings de varias lineas)
let message = `Hello, my name 
is ${myName}`; //${} para insertar variables
let email = 'paul.lopez.p@uni.pe'
console.log(message);
console.log(`Hola, ${myName}, tu correo es ${email}`);
