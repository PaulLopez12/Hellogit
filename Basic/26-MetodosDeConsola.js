//Console
//log
console.log('Hola')

//errores
console.error('Este es un mensaje de error')
console.error('Error al conectarse.', new Error('sin conexion a internet'))

//warn
console.warn('Mensaje de advertencia')

//info
console.info('Mensaje de informacion adicional')

//table
let data=[
    ['Paul',27],
    ['Añañin',13]
]
console.table(data)

data=[ //darle nombre a las columnas
    {name:'Paul',age:27},
    {name:'Añañin',age:12}
]
console.table(data)

//Group
console.group('Usuario')
console.log('Nombre: Paul')
console.log('Edad: 27')
console.groupEnd()//Cierra el grupo

//Time(mide el tiempo que tarda en ejecutarse el codigo)
console.time('Tiempo de ejecucion') //inicia la medicion
for(let i=0;i<10000;i++){

}
console.timeEnd('Tiempo de ejecucion') //termina la medicion
//se pueden hacer mediciones en paralelo

//assert (muestra mensaje de error si lo evaluado es falso)
let age = 17
console.assert(age>=18,'Usuario debe ser mayor de edad')

//count
console.count('Clic')
console.count('Clic')
console.count('Clic')
console.countReset('Clic')

//trace
function funA(){
    funB()
}
function funB(){
    console.trace('Seguimiento de la ejecucion')
}
funA()

//clear
console.clear()
