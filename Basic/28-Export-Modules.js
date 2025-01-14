//Exportacion de modulos
//funciones
export function suma(a,b){
    return a+b
}
console.log(suma(5,10))

//Propiedades
export const pi=3.141516
export let name='Paul'

//Clases
export class Circle{
    constructor(ratio){
        this.ratio=ratio
    }
    area(){
        return (Math.PI)*(Math.pow(this.ratio,2))
    }
    perimeter(){
        return Math.PI*2*this.ratio
    }
}

//Exportacion por defecto
export default function resta(a,b){
    return a-b
}

/*export default class myClass(){
    func(){
        console.log('')
    }
}*/