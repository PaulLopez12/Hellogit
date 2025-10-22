// 1. Crea un código con un error lógico y usa VS Code para encontrarlo
function powerError(a, b){
    if((typeof a === "number") && (typeof b === "number") ){
        return a**b
    }else{
        throw Error("Los parámetros deben ser números")
    }

}
(powerError(0,"b"))
// 2. Experimenta con breakpoints y observa cómo cambia el flujo de ejecución
/*done*/ 