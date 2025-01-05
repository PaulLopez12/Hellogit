//Bucles
//for
for (let i=0; i<5; i++){
    console.log(`Hola ${i+1}`);
}

const num = [10, 20, 30, 40, 50];
for (let i=0; i<num.length; i++){
    num[i] = num[i]/2;
    console.log(`El numero ${num[i]*2} entre 2 es: ${num[i]}`);
}

//while
while (num[0]>5){
    console.log(num[0]);
    num[0]--;
}

//do while
do{
    console.log(num[0]);
    num[0]--;
}while(num[0]>5);

//for of (recorrer algo iterable)
myArray = [1, 2, 3, 4, 5]
mySet = new Set([1, 2, 3, 4, 5])
myMap = new Map([
    ['1', 'uno'],
    ['2', 'dos'],
    ['3', 'tres']
])
myString = 'Hola JS'

for(let valor of myArray){
    console.log(valor);
}

for(let valor of mySet){
    console.log(valor);
}

for(let valor of myMap){
    console.log(valor);
}

for(let valor of myString){
    console.log(valor);
}

//Buenas practicas
//break y continue 
for (let i=0; i<10; i++){
    if (i===5){
        continue; //salta el valor de la condicion
    }else if (i===8){
        break; //termina el bucle
    }
    console.log(i);
}