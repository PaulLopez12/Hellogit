//1.Imprime tu nombre si una variable toma su valor
let nombre='Paul'
let number=1
if(number==1){
    console.log(nombre)
}

//2.Imprime un mensaje si el usuario y contraseña coincide con uno establecido
let userName='Paul'
let password='1234'
if(userName=='Paul' && password=='1234'){
    console.log('Ingresando')
}

//3.Verifica si un numero es positivo, negativo o cero e imprime el mensaje
let numero=5
if(numero>0){
    console.log('El numero es positivo')
} else if(numero<0){
    console.log('El numero es negativo')
}
else{
    console.log('El numero es cero')
}

//4.Verifica si una persona puede votar o no (mayor de 18 años) e imprime cuantos años le faltan
let edad=13
if(edad>=18){
    console.log('Puede votar')
} else{
    console.log(`Le faltan ${18-edad} años para votar`)
}

//5.Usa el operador ternario para asignar el valor 'adulto' o 'menor' a una variable dependiendo
//de la edad
let age=27
const  mensaje=age>=18 ? 'adulto' : 'menor'

//6.Muestra en que estacion del año estamos dependiendo del mes
let mes=11
if(mes>=1 && mes<=3){
    console.log('Estamos en verano')
}
else if(mes>=4 && mes<=6){
    console.log('Estamos en otoño')
}
else if(mes>=7 && mes<=9){
    console.log('Estamos en invierno')
}
else if(mes>=10 && mes<=12){
    console.log('Estamos en primavera')
}
else{
    console.log('No es un mes valido')
}

//7.Muestra el numero de dias que tiene el mes dependiendo de la variable del ejercicio anterior
if(mes==2){
    console.log(`El mes ${mes} tiene 28 dias`)
}
else if(mes%2==0){
    console.log(`El mes ${mes} tiene 30 dias`)
}
else if(mes%2!=0){
    console.log(`El mes ${mes} tiene 31 dias`)
}

//8.Usa switch para imprimir un saludo dependiendo del idioma
let saludo='fr'
switch(saludo){
    case 'es':
        console.log('Hola')
        break
    case 'en':
        console.log('Hello')
        break
    case 'fr':
        console.log('Bonjour')
        break
    default:
        console.log('Idioma no soportado')
}
//9.Switch para el ejercicio 6
switch(mes){
    case 1:
    case 2:
    case 3:
        console.log('Estamos en verano')
        break
    case 4:
    case 5:
    case 6:
        console.log('Estamos en otoño')
        break
    case 7:
    case 8:
    case 9:
        console.log('Estamos en invierno')
        break
    case 10:
    case 11:
    case 12:
        console.log('Estamos en primavera')
        break
    default:
        console.log('No es un mes valido')
}   

//10.Switch para el ejercicio 7
switch(mes){
    case 2:
        console.log(`El mes ${mes} tiene 28 dias`)
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`El mes ${mes} tiene 30 dias`)
        break
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`El mes ${mes} tiene 31 dias`)
        break
    default:
        console.log('No es un mes valido')
}