// Manejo de APIs

// - APIs REST (HTTP + URLs + JSON)

// Métodos HTTP
// - GET (pedir datos)
// - POST (enviar datos para crear un nuevo recurso)
// - PUT (enviar datos para actualizar un recurso)
// - DELETE (eliminar un recurso)

// Códigos de respuesta HTTP:
// - 200 OK: éxito en la petición
// - 201: 200 ok + recurso creado
// - 400: error por parte del cliente
// - 404: se pidió algo que no existe
// - 500: error por parte del servidor

// Consumir una API 
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    return response.json() //transforma la respuesta a json
}).then(data =>{
    console.log(data) //procesa los datos
})
.catch(error => {
    console.log("Error:", error) //captura errores
})

// Uso de async/await

async function getPosts(){
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    console.log(data)
    }catch(error){
        console.log("Error: ", error)
    }
}

getPosts()

// Solicitud POST
async function createPost(){
    try{
        const newPost = {
            userId: 1,
            tittle: "Este es el título de mi post",
            body: "Este es el cuerpo de mi post"
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
        const data = await response.json()
        console.log(data)
    }catch(error){
            console.log("Error: ", error)
        }
}
createPost()

//Herramientas para realizar peticiones HTTP
//1. postman
//2. apidog
//3. Thunder Client (extension vscode)

// Manejo de errores
fetch("https://jsonplaceholder.typicode.com/añañin")
.then(response => {
    if(!response.ok){
        throw Error(`Status HTTP: ${response.status}`)
    }
    return response.json()
})
.catch(error => {
    console.log("Error:", error) //captura errores
})

// Métodos HTTP adicionales 
// - PATCH: actualizar parcialmente un recurso
// - OPTIONS: consulta métodos HTTP permitidos para un recurso

async function partialPostUpdate(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({tittle: "Este es el nuevo titulo de mi post"})
        })
        const data = await response.json()
        console.log(data)
    }catch(error){
            console.log("Error: ", error)
        }
}
partialPostUpdate()

// Autenticacion mediante API Key
/* 
 * API Key: f5acfeb8de55fe4bf51f3c4f34eac89d 
 ** URl: https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
*/


async function getWeather(city) {
    const apiKey = "f5acfeb8de55fe4bf51f3c4f34eac89d"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    
        try{
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
        }catch(error){
            console.log("Error: ", error)
        }
}
getWeather("Madrid")

// Otros métodos de Autenticación y Autorización
