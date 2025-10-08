// Programación asíncrona

// Código síncrono
console.log("Inicio del programa")
//for (let i=0;i<1000000000;i++){}
console.log("Fin del programa")

// Event loop (bucle de eventos)

// Componentes del event loop:
// 1. Call stack (pila de ejecución)
// 2. Web APIs (apis del navegador) o Node.js
// 3. Task queue (cola de tareas) y Microtask queue (cola de microtareas)

// Flujo del event loop:
// 1. Call stack
// 2. Operaciones asíncronas (Web APIs o Node.js)
// 3. Operacion termina -> Task queue o Microtask queue
// 4. Si call stack está vacío -> Event loop mueve tarea a call stack
// 5. El proceso se repite

// - Callbacks
console.log('Inicio')

setTimeout(() => {
    console.log('Esto se ejecuta despues de 2 segundos')
},2000)

console.log('Fin')

// - Problema: Callback hell
function step1(callback) {
    setTimeout(() => {
        console.log('Paso 1 completado')
        callback()
    },1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log('Paso 2 completado')
        callback()
    },1000)
}

function step3(callback) {
    setTimeout(() => {
        console.log('Paso 3 completado')
        callback()
    },1000)
}

step1(() => {
    step2(() => {
        step3(() => {

        })
    })
    console.log('Todo el proceso ha finalizado')
})

// - Promesas (alternativa a los callbacks)
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ok = true
        if (ok) {
            resolve('La promesa se ha cumplido')
        }else {
            reject('La promesa no se ha cumplido')
        }
    }, 4000)
})

promise
.then(result => {
    console.log(result)
})
.catch(error => {
    console.log(error)
})

// - Encadenamiento de promesas
function step1Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Paso 1 con promesa completado')
            resolve()
        }, 1000)
    })
}

function step2Promise() {
        return new Promise(resolve => {
        setTimeout(() => {
            console.log('Paso 2 con promesa completado')
            resolve()
        }, 1000)
    })
}

function step3Promise() {
        return new Promise(resolve => {
        setTimeout(() => {
            console.log('Paso 3 con promesa completado')
            resolve()
        }, 1000)
    })
}

step1Promise()
.then(step2Promise)
.then(step3Promise)
.then(() => {
    console.log('Todo el proceso con promesa ha finalizado')
})

// - Async / Await (azúcar sintáctico sobre las promesas)

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function process(){
    console.log('Inicio del proceso con async/await')
    await wait(5000)
    console.log('Proceso despues de 5 segundos')
    await wait(1000)
    console.log('Proceso despues de 1 segundos')
    await wait(2000)
    console.log('Proceso despues de 2 segundos')
    console.log('Fin del proceso con async/await')
}

process()