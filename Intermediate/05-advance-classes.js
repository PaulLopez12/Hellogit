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
class Cat extends Animal {
    constructor(name){
        super(name)
    }
    makeSound(){
        console.log('Miau')
    }
}

class Dog extends Animal {
    constructor(name){
        super(name)
    }
    makeSound(){
        console.log('Guau')
    }
}

const cat = new Cat("Pelusa")
console.log(cat)
cat.makeSound()

const dog = new Dog("Masha")
console.log(dog)
dog.makeSound()

// - Mixins
const FlyMixin = {
    fly(){
        console.log(`${this.name} está volando`)
    }
}

class Bird extends Animal {
    constructor(name){
        super(name)
    }

}

class Dragon extends Animal {
    constructor(name){
        super(name)
    }
    
}

Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird("Pajaro")
console.log(bird.name)
bird.fly()

const dragon = new Dragon("Dragon")
console.log(dragon.name)
dragon.fly() 

// - Singleton