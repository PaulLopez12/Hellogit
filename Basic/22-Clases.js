//Clases (plantillas de objetos)
export default class Person{
    constructor(name,age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

//Sintaxis
let person = new Person('Paul',27,'ZWarkingZ')
let person2 = new Person('Añañin',5,'Soy')
console.log(person)
console.log(person2)

//Valores por defecto
class DefaultPerson{
    constructor(name='Sin nombre',age=0,alias='Sin alias'){
        this.name = name
        this.age = age
        this.alias = alias
    }
}
let person3= new DefaultPerson('Paul',27)
console.log(person3)

//Acceson a propiedades
console.log(person3.name)
console.log(person3['alias'])
person3.alias='ZWarking'
console.log(person3.alias)

//Funciones en clases
class PersonWithMethod{
    constructor(name='Sin nombre',age=0,alias='Sin alias'){
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk(){
        console.log('La persona camina')
    }
}
let person4 = new PersonWithMethod()
person4.walk()

//Propiedades privadas
class PrivatePerson{
    #bank
    constructor(name='Sin nombre',age=0,alias='Sin alias',bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
    pay(){
        this.#bank
    }
}
let person5=new PrivatePerson('',0,'','dawdasd')
/*console.log(person5.#bank) no se puede acceder, #bank no es bank*/

//Getters y setters (acceder a propiedades privadas)
class GetSetPerson{
    #name
    #age
    #alias
    #bank
    constructor(name='Sin nombre',age=0,alias='Sin alias',bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank=bank
    }
    get name(){ //se puede leer pero no escribir
        return this.#name
    }
    set bank(bank){
        this.#bank = bank
    }
}
let person6 = new GetSetPerson('Paul',27,'ZWarking','dawdasd')
console.log(person6.name)
person6.bank='new 13465'

//Herencias
class Animal{
    constructor(name){
        this.name=name
    }
    sound(){
        console.log('Sonido generico')
    }
}

class Dog extends Animal{//extends usa la clase general para heredar
    sound(){
        console.log('Woof')
    }

    run(){
        console.log('El perro corre')
    }
}
class Fish extends Animal{
    constructor(name,size){
        super(name) //usa el de la superclase
        this.size=size
    }
    swim(){
        console.log('El pez nada')
    }
}
let myDog = new Dog('Pelusa')
let myFish = new Fish('Nemo',15)
myDog.sound()
myDog.run()
myFish.swim()

//Metodos estaticos
class MathOperations{
    static suma(a,b){//ya no es necesario crear una variable para invocar la funcion
        return a+b
    }
}
console.log(MathOperations.suma(5,15))