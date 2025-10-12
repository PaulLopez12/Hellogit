// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".
function greet(name, callback){
    setTimeout(() =>{
        console.log(`Hola, ${name}`)
        callback()
    },2000)
}
greet('Paul', () => {
    console.log('Saludo realizado')
})

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
function task1(callback){
    setTimeout(() => {
        console.log('Tarea 1 completada')
        callback()
    },1000)
}

function task2(callback){
    setTimeout(() => {
        console.log('Tarea 2 completada')
        callback()
    },1000)
}

function task3(callback){
    setTimeout(() => {
        console.log('Tarea 3 completada')
        callback()
    },1000)
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log('Todas las tareas completadas')
        })
    })
})

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".
function checkNumber(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num % 2 === 0){
                resolve('Número par')
            }
            else{
                reject('Número impar')
            }
        }, 4000)
    })
}
checkNumber(4)
.then(result => console.log(result))
.catch(error => console.log(error))

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
function firstTask(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Primera tarea completada')
            resolve()
        },5000)
    })
}

function secondTaskTask(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Segunda tarea completada')
            resolve()
        },7000)
    })
}

function thirdTask(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Tercera tarea completada')
            resolve()
        },8.5000)
    })
}
firstTask()
.then(secondTaskTask)
.then(thirdTask)
.then(() => {
    console.log('Todas las tareas completadas')
})

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada 
//    executeTasks().
function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function executeTasks() {
    console.log('Inicio de tareas')
    await wait(9000)
    console.log('Primera tarea completada')
    await wait(11000)
    console.log('Segunda tarea completada')
    await wait(12500)
    console.log('Tercera tarea completada')
    console.log('Todas las tareas completadas')
}
executeTasks()

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API 
//    (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.
function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(id<5){
                resolve({id, nombre: "Usuario " + id})
            }
            else{
                reject('Usuario no encontrado')
            }
        },2000)
    })
}
async function fetchUser(id){
    try{
        const user = await getUser(id)
        console.log(user)
    }
    catch(error){
        console.log(error)
    }
}
fetchUser(3)
fetchUser(5)

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
// console.log("Inicio")
// setTimeout(() => console.log("setTimeout ejecutado"), 0)
// Promise.resolve().then(() => console.log("Promesa resuelta"))
// console.log("Fin")

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar 
//    "Todas las promesas resueltas" cuando terminen.
function promise1(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Promesa 1 resuelta')
            resolve()
        },3000)
    })
}

function promise2(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Promesa 2 resuelta')
            resolve()
        },5000)
    })
}
function promise3(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Promesa 3 resuelta')
            resolve()
        },2000)
    })
}
Promise.all([promise1(), promise2(), promise3()])
.then(() => {
    console.log('Todas las promesas resueltas')
})

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para 
//    esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar 
//    "Tiempo finalizado" en consola.
function waitSeconds(seconds){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
       }, seconds * 1000)
    })
}
async function waitAndNotify(){
    await waitSeconds(3)
    console.log('Tiempo finalizado')
}
waitAndNotify()

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, 
//     o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
    
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes
function checkBalance(founds){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Saldo disponible: $${founds}`)
            resolve()
        },1000)
    })
}

let founds = 500

function withdrawMoney(amount){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(amount < founds){
                resolve(`Retirando $${amount}... 
Operación exitosa, saldo disponible: $${founds - amount}`)
                founds -= amount
            }
            else{
                reject(`Retirando $${amount}...
Error: Fondos insuficientes`)
            }
        },2000)
    })
}



async function ATM() {
    try{
    console.log('Bienvenido a su cajero automático')
    await checkBalance(founds)
    let firstWithdraw = await withdrawMoney(300)
    console.log(firstWithdraw)
    let secondWithdraw = await withdrawMoney(300)
    console.log(secondWithdraw)
    }catch(error){
        console.log(error)
    }
}
ATM()
