// 1. Crea un función que utilice error correctamente
// 2. Crea una función que utilice warn correctamente
// 3. Crea una función que utilice info correctamente
function suma(a=0,b=0){
    if(typeof a !== 'number' || typeof b !== 'number'){
        console.error('Los datos deben ser numeros')
    }
    if(a==0 || b==0){
        console.warn('Se esta intentando sumar',a,'+',b)
    }
    if(a<0 || b<0){
        console.info('Solo se suman numeros positivos')
    }
    return a+b
}
console.log(suma(5,3))

// 4. Utiliza table
let data =[
    {nick:'Makizeninkill', ilvl: 1673},
    {nick:'Daredevil', ilvl: 1660},
    {nick:'Lagerthashield', ilvl: 1660}
]
console.table(data)

// 5. Utiliza group
console.group('Personajes:')
console.log('nick: Makizeninkill, ilv: 1673')
console.log('nick: Daredevil, ilv: 1660')
console.log('nick: Lagerthashield, ilv: 1660')
console.groupEnd

// 6. Utiliza time
console.time('Empieza funcion multiplicar')
function mult(a=1,b=1){
    if(a==0 || b==0){
        console.warn('Se esta intentando multiplicar', a,'*',b)
    }
    if(a<0 || b<0){
        console.info('Solo se puede multiplicar enteros positivos')
    }
    if(typeof a!== 'number' || typeof b!== 'number'){
        console.error('Los datos deben ser numeros')
    }
    else{
        return `El producto es ${a*b}`
    }
}
console.log(mult(5,3))
console.timeEnd('Empieza funcion multiplicar')

// 7. Valida con assert si un número es positivo
let numero=-5
console.assert(numero>0, `El numero ${numero} es negativo`)

// 8. Utiliza count
console.count('Hola')
console.count('Hola')
console.count('Hola')
console.count('Hola')
console.countReset('Hola')

// 9. Utiliza trace
console.trace(mult(0,3))
// 10. Utiliza clear
console.clear()