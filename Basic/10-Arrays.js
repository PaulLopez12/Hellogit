//Array
let myArray = [] //se usa mas y es mas simple
let myArray2 = new Array()
console.log(myArray, myArray2)

myArray = [1, 2, 3, 4, 5]
myArray2 = new Array(5)
console.log(myArray, myArray2)

//Metodos comunes
myArray = []

//push y pop
myArray.push('Paul')
myArray.push('Lopez')
myArray.push('27')
console.log(myArray)

myArray.pop() //Elimina el ultimo elemento
console.log(myArray.pop())

//shift y unshift
myArray.shift() //Elimina el primer elemento
myArray.unshift() //Agrega un elemento al principio, les puedes agregar mas valores

//length
console.log(myArray.length)

//clear
myArray = []
console.log(myArray)

//slice
myArray.slice(1, 3) //Corta el array desde la posicion 1 hasta la 3
console.log(myArray)

//splice
myArray.splice(1, 3) //Elimina desde la posicion 1 hasta la 3 y te permite agregar mas valores