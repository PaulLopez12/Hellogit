//Exception
let myObject
/*console.log(myObject.email) produce una excepcion*/

//Try catch
try{
    //Codigo que intenta ejecutar
    console.log(myObject.email)
    console.log('Finaliza la ejecucion sin errores')
}catch{
    console.log('Se ha producido un error:')
}

//Captura del error
try{
    console.log(myObject.email)
    console.log('Finaliza la ejecucion sin errores')
}catch(error){
    console.log('Se ha producido un error:',error.message)
}

//finally
try{
    console.log(myObject.email)
    console.log('Finaliza la ejecucion sin errores')
}catch(error){
    console.log('Se ha producido un error:',error.message)
}finally{
    console.log('Este codigo se ejecuta siempre')
}

//Lanzar errores
function sumIntegers(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
      throw new TypeError('Esta operacion solo suma numeros')
    }

    if((!Number.isInteger(a) || !Number.isInteger(b))){
        throw new Error('Esta operacion solo suma enteros')
    }
    if(a==0 || b==0){
        throw new SumZeroIntegerError('Se esta intentando sumar cero',a,b)
    }
    return a+b
}

try{
    console.log(sumIntegers(5,10))
    console.log(sumIntegers('5',10))
    console.log(sumIntegers(5.5,10))
    console.log(sumIntegers('5',10))
}catch(error){//se ejecuta en el primer error
    console.log('Se ha producido un error:', error.message)
}

//Capturar varios tipos de errores
try{
    console.log(sumIntegers(5.5,10))
    console.log(sumIntegers('5',10))
}catch(error){
    if(error instanceof TypeError){
        console.log('Se ha producido un error de tipo:',error.message)
    }else if(error instanceof Error){
        console.log('Se ha producido un error:', error.message)
    }
}

//Crear excepciones personalizadas
class SumZeroIntegerError extends Error{
    constructor(message,a,b){
        super(message)
        this.a = a
        this.b = b
    }
    printNumbers(){
        console.log(this.a,'+',this.b)
    }
}

try{
    console.log(sumIntegers(0,10))
}catch(error){
    console.log('Se ha producido un error personalizado:', error.message)
    error.printNumbers()
}