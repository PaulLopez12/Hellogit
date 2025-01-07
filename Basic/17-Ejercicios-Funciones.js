//1.Crea una funcion que reciba numeros y de la suma
function suma(a=0,b=0){
    console.log(`La suma es: ${a+b}`)
}
suma(5,10)

//2.Crea una funcion que reciba un array de numeros y devuelva la suma
function sumArray(array){
    let i=0
    let suma=0
    for(i=0; i<array.length; i++){
        suma += array[i]
    }
    console.log(suma)
}
let arrayPrueba=[1,2,3,4,5]
sumArray(arrayPrueba)

//3.Crea una funcion que reciba un string y de el numero de vocales
function vocales(frase){
    let i=0
    let numVoc=0
    for(i=0;i<frase.length;i++){
        if(frase[i]==='a'|| frase[i]==='e'||frase[i]==='i'||frase[i]==='o'||frase[i]==='u'){
            numVoc++
        }
    }
    console.log(`La frase tiene ${numVoc} vocales`)
}
let frasePrueba = 'Cuantas vocales'
vocales(frasePrueba)

//4.Funcion que reciba un array de strings y de un array con los strings en mayuscula
function mayus(string){
    console.log(string.toUpperCase())
}
let strPrueba = 'a mayusculas'
mayus(strPrueba)

//5.Funcion que reciba un numero y diga true si es primo y false si no lo es
function primo(a=0){
    let i=2
    let raiz = Math.sqrt(a)
    if(a==2 || a==3){
        console.log(true)
    }
    else if(a==0 || a==1){
        console.log(false)
    }
    else{
        while(i<=raiz.toFixed(0)){
            if(a%i!=0){
                i++
            }
            if(a%i==0){
                console.log(false)
                break
            }
            else{
                console.log(true)
                break
            }
        }
    }
}
primo(23)

//6.Funcion que reciba dos arrays, que de otro array con los elementos comunes
function comun(array1,array2){
    let comunes=[]
    let i=0
    let j=0
    for(i=0; i<array1.length;i++){
        for(j=0;j<array2.length;j++){
            if(array1[i]===array2[j]){
                comunes.push(array1[i])
            }
        }
    }
    console.log(comunes)
}
let a1='Hola como es'
let a2='estas'
comun(a1,a2)

//7.Funcion que reciba array de numeros y devuelva la suma de los pares
function sumPares(array){
    let suma=0
    let i=0
    for(i=0;i<array.length;i++){
        if(array[i]%2==0){
            suma += array[i]
        }
    }
    console.log(suma)
}
let pr = [2,3,4,8]
sumPares(pr)

//8.Funcion que reciba un array de numeros y de otro array con los cuadrados
function cuadrados(array){
    let cuad=[]
    let i=0
    for(i=0;i<array.length;i++){
        array[i]=array[i]**2
        cuad.push(array[i])
    }
    console.log(cuad)
}
let base =[2,3,4]
cuadrados(base)

/*9.Funcion que reciba una cadena de texto y devuelva la misma cadena con las 
palabras en orden inverso*/
function inverso(texto){
    let inver=''
    let i=0
    for(i=texto.length-1;i>=0;i--){
        inver+=texto[i]
    }
    console.log(inver)
}
let text = 'Hola'
inverso(text)

//10.Crea una función que calcule el factorial de un número dado
function factorial(a=0){
    let fact=1
    if(a==0){
        console.log(`El factorial de ${a} es 1`)
    }
    else if(a<0){
        console.log('No existe factorial de un negativo')
    }
    else{
        let i=1
        for(i=1;i<=a;i++){
            fact *= i
        }
        console.log(`El factorial de ${a} es ${fact}`)
    }
}

factorial(5)