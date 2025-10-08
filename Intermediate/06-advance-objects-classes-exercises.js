// 1. Agregega una función al prototipo de un objeto

let Smartphone = {
    brand: 'Xiaomi',
    model: 'Redmi Note 14',
    origin: 'China',
}

Smartphone.getDetails = function() {
    console.log(`El ${this.brand} ${this.model} tiene 256GB de almacenamiento y 16GB de RAM.`);
}
Smartphone.getDetails()

// 2. Crea un objeto que herede de otro
let Tablet = Object.create(Smartphone)
Tablet.brand = 'Apple'
Tablet.model = 'iPad Pro'

// 3. Define un método de instancia en un objeto
Tablet.showInfo = function() {
    console.log(`La tablet es de la marca ${this.brand} y el modelo es ${this.model}.`);
}

// 4. Haz uso de get y set en un objeto
Object.defineProperty(Tablet, 'fullName', {
    get: function() {
        return `${this.brand} ${this.model}`;
    },
    set: function(name) {
        const parts = name.split(' ');
        this.brand = parts[0] || '';
        this.model = parts[1] || '';
    }
});

// 5. Utiliza la operación assign en un objeto
let tablet_core = {brand: 'Samsung'}
let tablet_details = {model: 'Galaxy Tab S8', origin: 'Korea'}
let full_tablet = Object.assign(tablet_core, tablet_details)
console.log(full_tablet)

// 6. Crea una clase abstracta
class Vehicle {
    constructor(type){
        if(this.constructor === Vehicle){
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.type = type
    }
    start(){
        throw new Error("El método start() debe ser implementado")
    }
}

// 7. Utiliza polimorfismo en dos clases diferentes
class Car extends Vehicle {
    constructor(type){
        super(type)
    }
    start(){
        console.log('El coche está arrancando')
    }
}

class Motorcycle extends Vehicle {
    constructor(type){
        super(type)
    }
    start(){
        console.log('La motocicleta está arrancando')
    }
}

// 8. Implementa un Mixin
const ElectricMixin = {
    charge(){
        console.log(`${this.type} está cargando`)
    }
}

Object.assign(Car.prototype, ElectricMixin)
Object.assign(Motorcycle.prototype, ElectricMixin)


// 9. Crea un Singleton
class Database {
    constructor(){
        if(Database.instance){
            return Database.instance
        }
        this.connection = null
        Database.instance = this
    }
    connect(){
        if(!this.connection){
            this.connection = 'Conexión a la base de datos establecida'
        }
        return this.connection
    }
}

// 10. Desarrolla un Proxy
const user = {
    name: 'Alice',
    age: 28
}
const userProxy = new Proxy(user, {
    get(target, prop){
        console.log(`Accediendo a la propiedad: ${prop}`)
        return target[prop]
    },
    set(target, prop, value){
        console.log(`Modificando la propiedad: ${prop} a ${value}`)
        target[prop] = value
        return true
    }
})
