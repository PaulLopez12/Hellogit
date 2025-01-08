//1.Usa desestruturacion para extraer los dos primeros elementos de un array
let myArray = [1,2,3,4,5]
let [value0,value1,,,]=myArray
console.log(value0)
console.log(value1)

//2.Usa desestruturacion en un array y asigna un valor predeterminado a una variable
let [value2,value3,value4=0,,]=myArray

//3.Usa desestruturacion para extraer dos propiedades de un objeto
let person ={
    name: 'Paul',
    age: 27,
    alias: 'ZWarkingZ'
}
let {name,age}=person
console.log(name)
console.log(age)

//4.Usa desestruturacion para extraer dos propiedades de un objeto y asignalas a nuevas 
//  variables con nombres diferentes
let {name:name2,age:age2}=person

//5.Usa desestruturacion para extraer dos propiedades de un objeto anidado
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
let {name:name3,job:{name:jobName}}=person3

//6.Usa propagacion para combinar dos arrays en una nuevo
let myArray2=[2,3,4]
let myArray3=[...myArray,...myArray2]
console.log(myArray3)

//7.Usa propagacion para crear una copia de un array
let myArray4=[...myArray]

//8.Usa propagacion para combinar dos objetos en uno nuevo
let person4={...person,...person3}
console.log(person4)

//9.Usa propagacion para crear una copia de un objeto
let person5 = {...person}

//10.Combina desestructuracion y propagacion
let {name:name5,age:age3,alias,walk,job}={...person,...person3}
console.log(name)