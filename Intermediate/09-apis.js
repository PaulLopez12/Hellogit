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