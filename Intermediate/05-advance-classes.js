// Clases avanzadas
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

const person = new Person('Paul', 27)
person.greet()

person.sayAge = function(){
    console.log(`Tengo ${this.age} años`)
}
person.sayAge()

// Clases abstractas
class Animal {
    constructor(name){
        if(new.target === Animal){
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }
    makeSound(){
        throw new Error('Este método tiene que ser implementado por la subclase')
    }
}

// - Polimorfismo
