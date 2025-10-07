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

// - Patrón Singleton (para tener una sola instancia de una clase)
class Session {
    constructor(name){
        if(Session.instance){
            return Session.instance
        }
        this.name = name
        Session.instance = this // Guardamos la instancia
    }
}

const sesssion1 = new Session("ZWarkingZ")
const session2 = new Session("")
console.log(sesssion1)
console.log(session2)
console.log(sesssion1 === session2) // true, ambas variables apuntan a la misma instancia

// - Symbol
const ID = Symbol('id')

class User {
    constructor(name){
        this.name = name
        this[ID] = Math.random()
    }
    getID(){
        return this[ID]
    }
}

const user = new User("Paul")
console.log(user.name)
console.log(user.ID) // undefined, no se puede acceder directamente
console.log(user[ID])
user[ID] = 123 // Se modifica el valor del Symbol
console.log(user[ID])
console.log(user.getID()) // Accedemos al valor del Symbol a través de un método

// - instanceof
class Car {
     
}
const car = new Car()

console.log(car instanceof Car)

// create
const car2 = Object.create(Car.prototype)
console.log(car2 instanceof Car)

// - proxy
const proxy = {
    get(target, property){
        console.log('Accediendo a la propiedad:', property)
        return target[property]
    },
    set(target, property, value){
        if(property === 'balance' && value < 0){
            throw new Error("El balance no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance){
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy)
console.log(account.balance)
account.balance = 200
console.log(account.balance)