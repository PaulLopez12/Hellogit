//Importacion de modulos
import { suma,pi,name, Circle } from "./28-Export-Modules.js";
import resta from "./28-Export-Modules.js"; //exporta solo lo que esta por defecto, sin importar el nombre
//Solo se puede tener un default por fichero, no se puede exportar una variable default
/*Se debe alterar el nombre del fichero de .js a .mjs, si no usas package.json */
/*El package.json evita alterar de .js a .mjs */

//funciones
suma(5,10)

//Propiedades
console.log(pi)
console.log(name)

//Clases
let circle = new Circle(5)
console.log(circle.ratio)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))

//Importacion por defecto
console.log(resta(5,10))

//Proyecto modular
/* import {myImport} from "./directory/file.js" */

