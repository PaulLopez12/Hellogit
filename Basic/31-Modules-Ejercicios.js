//1.Exporta una funcion
//2.Exporta una constante
//3.Exporta una clase
//9.Exporta una funcion, constante y clase desde una carpeta
export function mult(a,b){
    return `El producto es ${a*b}`
}

export const piso='piso'

export class Cuenta{
    constructor(correo){
        this.correo=correo
    }
}

//4.Importa una funcion
//5.Importa una constante
//6.Importa una clase
import {suma,pi,Circle} from "./28-Export-Modules.js";

console.log(suma(3,7))
console.log(pi)
let circulo = new Circle(3)
console.log(circulo.perimeter().toFixed(1))


//7.Exporta una funcion, constante y clase por defecto (en caso lo permita)
/*Solo se puede un default por fichero*/
export default class clase{
    constructor(dato){
        this.dato=dato
    }
} 

//8.Importa una funcion, constante y clase por defecto (en caso lo permita) 
/*Solo se puede un default por fichero*/
import resta from "./28-Export-Modules.js";
console.log(resta(3,5))


//10.Importa una funcion, constante y clase desde un directorio diferente al anterior
import  {helloWorld3}  from "./01-Variables.js";
import  {myFuncion2} from "./16-Funciones.js";
import  {Person}  from "./22-Clases.js";

console.log(helloWorld3)
myFuncion2('Paul')
let person = new Person('Paul',27,'ZWarking')
console.log(person)

