// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista 
// de publicaciones
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log("Error", error)
})

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando 
// response.ok. Si no lo es, lanza y muestra un error
fetch("https://jsonplaceholder.typicode.com/crucified")
.then(response => {
    if(!response.ok){
        throw Error(`Status HTTP: ${response.status}`)
    }
})
.catch(error => {
    console.log(error)
})

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function getPost(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data)
    }catch(error){
            console.log("Error: ", error)
        }
}
getPost()

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un 
// objeto con propiedades como title o body
async function newPost() {
    try{
        const post1 = {
            userid: 2,
            tittle : 'Nuevo post creado',
            body: 'Cuerpo del nuevo post'
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post1)
        })
        const data = await response.json()
        console.log(data)
    }catch{
        console.log(error)
    }
    
}
newPost()

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar 
// una publicación) en JSONPlaceholder
async function newPut() {
    try{
        const put1 = {
            userid: 1,
            tittle : 'Nuevo put creado',
            body: 'Cuerpo del nuevo put'
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(put1)
        })
        const data = await response.json()
        console.log(data)
    }catch{
        console.log(error)
    }
    
}
newPut()

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso 
// existente
async function newPatch() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/20", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({body: 'Patch del post'})
        })
        const data = await response.json()
        console.log(data)
    }catch{
        console.log(error)
    }
    
}
newPatch()

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación)
//  y verifica la respuesta
async function newDelete() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
        const data = await response.json()
        console.log(data)
    }catch{
        console.log(error)
    }
    
}
newDelete()

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
async function get5DayForecast(city) {
    const apiKey = "0eefe4dbb54c715ea4b406f598f59c4c"
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
    
        try{
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
        }catch(error){
            console.log("Error: ", error)
        }
}
get5DayForecast("Madrid")

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación 
// los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie
async function pokeApi(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        try{
            const response = await fetch(url)
            const data = await response.json()
            const responseSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
            const dataSpecies = await responseSpecies.json()
            const EvolutionURL = dataSpecies.evolution_chain.url
            const EvolutionChain = await fetch(EvolutionURL)
            const dataEvolutionChain = await EvolutionChain.json()
            function mostrarNombres(chain){
                const nombres = [chain.species.name]
                if(chain.evolves_to.length > 0){
                    chain.evolves_to.forEach(evolution => {
                        nombres.push(...mostrarNombres(evolution))
                    })
                }
                return nombres
            }
            console.log(`Cadena evolutiva a partir de la especie ${data.species.name}:`)
            console.log(mostrarNombres(dataEvolutionChain.chain))
            }
        catch(error){
            console.log("Error: ", error)
        }
}
pokeApi("charmander")

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes 
// endpoint de una API
/*Done*/ 