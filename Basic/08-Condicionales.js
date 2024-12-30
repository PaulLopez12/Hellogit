//if, else if, else
let edad=27
if(edad<30){
    console.log('Eres una wawita')
} else if(edad>=30 && edad<60){
    console.log('Invierte en criptomonedas')
}
else{
    console.log('compra tu nicho nomas')
}

//Operador ternario
const  mensaje=edad==27 ? 'Eres una wawita' : 'Invierte en criptomonedas'
console.log(mensaje)

//Switch
let dia=5
switch(dia){
    case 1:
        console.log('El dia es Lunes')
        break
    case 2:
        console.log('El dia es Martes')
        break
    case 3:
        console.log('El dia es Miercoles')
        break
    case 4:
        console.log('El dia es Jueves')
        break
    case 5:
        console.log('El dia es Viernes')
        break
    case 6:
        console.log('El dia es Sabado')
        break
    case 7:
        console.log('El dia es Domingo')
        break
    default:
        console.log('No es un dia de la semana')
}