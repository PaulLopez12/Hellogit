//Objetos
let person ={
    name: 'Paul',
    age: 27,
    alias: 'ZWarkingZ'
}

//Acceso a propiedades
//por punto
console.log(person.age)
console.log(person.name)
console.log(person.alias)

//de corchetes
console.log(person["name"])

//Modificacion
person.name = 'Paul Lopez'
console.log(person.name)

//Eliminar propiedades
delete person.age
console.log(person)

//Añadir propiedad
person.email = 'ZWarking@gmail.com'
console.log(person)
person["age"]=27
console.log(person)

//Metodos (funciones)
let person2 ={
    name: 'Makizeninkill',
    age: 27,
    alias: 'ZWarkingZ',
    walk: function(){
        console.log('La persona camina')
    }
}
person2.walk()

//Anidar objetos
let person3 ={
    name: 'Makizeninkill',
    age: 27,
    alias: 'ZWarkingZ',
    walk: function(){
        console.log('La persona camina')
    },
    job: {
        name: 'Programador',
        exp: 15,
        work: function(){
            console.log(`La persona ${this.exp} años de experiencia trabaja`)
        }
    }
}
console.log(person3)
console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)

//Igualdad de objetos
console.log(person)
let person4 ={
    name: 'Paul Lopez',
    alias: 'ZWarkingZ',
    email: 'ZWarking@gmail.com',
    age: 27
}
console.log(person4)
console.log(person==person4) //false
console.log(person===person4) //false
/*Los objetos se guardan en direcciones de memoria*/

//Iteracion
for(let value in person4){
    console.log(value) //se accede a las claves
}

for(let key in person4){
    console.log(key + ': ' + person4[key]) //se accede a los valores
}
person3.job.work()

//Funciones como objetos
function Person(name,age){ //no es buena practica, deberia ser una clase
    this.name = name
    this.age = age
}
let person5 = new Person('Paul',27)