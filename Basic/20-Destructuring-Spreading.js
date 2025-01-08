let myArray = [1, 2, 3, 4, 5]
let person ={
    name: 'Paul',
    age: 27,
    alias: 'ZWarkingZ'
}

//Destructuracion
//Sintaxtis en arrays
let [myValue0,myValue1,myValue2,myValue3,myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

//Sintaxis arrays con valores predeterminados
let [myValue5=0,myValue6=0,myValue7=0,myValue8=0,myValue9=0,myValue10=0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)
console.log(myValue10)

//Ignorar variables
let [myValue11,,,,,myValue16] = myArray
console.log(myValue11)
console.log(myValue16)

//Sintaxis objetos
let {name,age,alias}=person
console.log(name)
console.log(age)
console.log(alias)

//Sitaxis objetos con valores predeterminados
let {name: name2,age: age2,alias: alias2,email='tmail@test.pe'}=person
/*en objetos debes poner la misma clave para declarar un valor predeterminado, no importa 
el orden*/

//Destructurar objetos anidados
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

let {name:name4,job:{name:jobName}}=person3
console.log(name4)
console.log(jobName)

//Propagacion
//Sintaxis array
let myArray2=[...myArray]
let myArray3=[...myArray,6,7]
console.log(myArray2) //copia
console.log(myArray3) //junta

//Combinacion de arrays
let myArray4=[...myArray ,...myArray2, ...myArray3] //junta los arrays
console.log(myArray4)

//Sintaxis en objetos
let person4 = {...person} //copia de objetos
let person5 = {...person, email:'emai@test.pe'}
console.log(person5)