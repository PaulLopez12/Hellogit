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

// Herencia
let programmer = Object.create(person) // Crea un nuevo objeto con person como prototipo
programmer.language = 'JavaScript'
programmer.greet()
programmer.sayAge()

// - Métodos estáticos y de instancia
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function(){
    console.log(`Hola, soy ${this.name}`);
}

let newPerson = new Person('Ana', 30)
newPerson.greet()

// - Métodos avanzados

// assign
let person_core = {name: 'John'}
let person_details = {age: 25, alias: 'Johnny'}

let full_person = Object.assign(person_core, person_details)
console.log(full_person)

// keys, values, entries
console.log(Object.keys(full_person)) // Muestra las claves del objeto
console.log(Object.values(full_person)) // Muestra los valores del objeto
console.log(Object.entries(full_person)) // Muestra las entradas del objeto