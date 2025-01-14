//1.Captura una excepcion usando try-catch
//2.Captura una excepcion usando try-catch y finally
let pruebaError
try{
    console.log(pruebaError.bank)
    console.log('Se ejecuta sin errores')
}catch(error){
    console.log('Se ha producido un error:', error.message)
}finally{
    console.log('El pograma continua')
}

//3.Lanza una excepcion generica
function prodInteger(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new TypeError('Esta operacion solo multiplica numeros')
    }
    if((!Number.isInteger(a)) || !(Number.isInteger(b))){
        throw new Error('Esta operacion solo multiplica enteros')
    }
    if(a==0 || b==0){
        throw new errorPersonalizado('Se esta intentando multiplicar por cero',a,b)
    }
    return a*b
}
console.log(prodInteger(5,10))

//4.Crea una excepcion personalizada
class errorPersonalizado extends Error{
    constructor(message,a,b){
        super(message)
        this.a=a
        this.b=b
    }
    imprimir(){
        console.log(this.a,'*',this.b)
    }
}

//5.Lanza una excepcion personalizada
try{
    console.log(prodInteger(0,10))
}catch(error){
    console.log('Error encontrado:', error.message)
    error.imprimir()
}

//6.Lanza varias excepciones segun una logica definida
//7.Captura varias excepciones en un mismo try-catch
try{
    console.log(prodInteger(5.5,10))
    console.log(prodInteger('5',10))
}catch(error){
    if(error instanceof TypeError){
        console.log('Error de tipo:', error.message)
    }else if(error instanceof Error){
        console.log('Se ha producido un error:', error.message)
    }
}

//8.Crea un bucle que intente transformar a float cada valor y capture y muestre los valores
let values = ['1','2','3','4']
for(let i=0;i<values.length;i++){
    console.log(Number.parseFloat(values[i]))
}
//9.Crea una funcion que verifique si un objeto tiene una propiedad especifica y lance una
//excepcion personalizada

let object ={
    p1:'propiedad1',
    p2:'propiedad2'
}

class errorObjeto extends Error{
    constructor(message,propertyName,objectName){
        super(message)
        this.propertyName=propertyName
        this.objectName=objectName
    }
}

function esPropiedad(obj,propertyName,objectName='objeto'){
    if(obj === null || obj === undefined){
        throw new errorObjeto(propertyName, 'null/undefined')
    }
    if(obj.hasOwnProperty(propertyName)){
        return true
    }
    throw new errorObjeto(propertyName, objectName)
}
esPropiedad(object,2,'hola')

//10.Crea una funcion que realice reintentos en caso de un error hasta un maximo de 10
async function tryAgain(fn, options={}){
    const{
        maxIntentos=10,
        again=null
    } = options
    let lastError
    for(let attempt=1;attempt<=maxIntentos;attempt++){
        try{
            return await fn()
        }catch(error){
            lastError=error
            if(attempt==maxIntentos){
                throw new Error(`Error despues de ${maxIntentos} intentos.
                    Ultimo error: ${error.message}`)
            }
            if(again){
                again({
                    error,
                    attempt,
                    remainingAttempts: maxIntentos-attempt,
                    waitTime
                })
            }
            await new Promise(resolve => setTimeout(resolve,waitTime))
        }
    }
}
