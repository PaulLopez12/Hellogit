// Objetos avanzados

// - Prototipos y herencia
// Prototipos
let person = {
    name: 'Paul',
    age: 27,
    greet(){
        console.log(`Hola, soy ${this.name}`);
    }
}
console.log(person.__proto__); // Muestra el prototipo del objeto person
console.log(Object.getPrototypeOf(person)); // Otra forma de obtener el prototipo

person.sayAge = function() {
    console.log(`Tengo ${this.age} años`);
}
console.log(person)
person.sayAge()