//1.Crea un objeto con 3 propiedades
let cuenta= {
    nickname: 'ZWarkingZ',
    password: 'Password1234',
    email: 'email@test.pe'
}

//2.Accede y muestra su valor
console.log(cuenta.nickname)
console.log(cuenta.password)
console.log(cuenta.email)

//3.Agrega una nueva propiedad
cuenta.SecQuest = 'Color favorito: ' 
console.log(cuenta)

//4.Elimina una de las 3 primeras propiedades
delete cuenta.password
console.log(cuenta)

//5.Agrega una funcion e invocala
cuenta.recPass = function(){
    console.log('Ingrese contraseña antigua: ')
}
cuenta.recPass()

//6.Itera las propiedades del objeto
for(let value in cuenta){
    console.log(value)
}

//7.Crea un objeto anidado
let cuenta2 = {
    nickname:'ZMWarkingZ',
    password:'palwpold1234',
    email:'email2@test.pe',
    recPass : {
        email:'email2@test.pe',
        SecQuest:'Fruta favorita: '
    }
}

//8.Accede y muestra el valor de las propiedades anidadas
console.log(cuenta2.recPass.email)
console.log(cuenta2.recPass.SecQuest)

//9.Comprueba si los 2 objetos creados son iguales
console.log(cuenta==cuenta2)

//10.Comprueba si dos propiedades diferentes son iguales
console.log(cuenta.nickname==cuenta2.password)