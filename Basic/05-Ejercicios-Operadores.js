//1.Crea una variable para cada operación aritmetica
let a= 4
let b=2
//2.Crea una variable para cada tipo de operacion de asignacion, que haga uso de las variables
//usadas para las operaciones aritmeticas
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)
a++
console.log(a)
//3.Imprime 5 comparaciones verdades con diferentes operadores de comparacion
console.log(4>2)
console.log(4<6)
console.log(4>=2)
console.log(2<=4)
console.log(4==4)
//4.Imprime 5 comparaciones falsas con diferentes operadores de comparacion
console.log(!(4>2))
console.log(!(4<6))
console.log(!(4>=2))
console.log(!(2<=4))
console.log(!(4==4))
//5.Usa el operador logico and
console.log(a>b && a<b)

//6.Usa el operador logico or
console.log(a>b || a<b)

//7.Combina ambos operadores logicos
console.log((a>b && a<b) || (a<b && a>b))

//8.Añade alguna negación
console.log(!(a>b && a<b) || (a<b && a>b))

//9.Usa el operador ternario
console.log(a>b ? "a es mayor que b" : "a es menor que b")

//10.Combina operador aritmetico, de comparacion y logico  
console.log(a+b==6 && a-b==2)
