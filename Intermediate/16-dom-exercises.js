// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a 
// "¡Hola Mundo!"" al cargar la página
console.log(document)
const newTitle = document.getElementById("title")
newTitle.textContent = "¡Hola Mundo!"

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL
const imagen = document.querySelector("#myImage")
imagen.src = "prueba2.png"

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página
const box = document.getElementById("box")
box.classList.add("resaltado")
/*console.log(typeof box)*/

// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul
const paragraph = document.getElementById("paragraph")
paragraph.style.color = "blue"

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto 
// "Nuevo elemento y lo agregue a una lista <ul id="list">
const button = document.getElementById("button")
const list = document.getElementById("list")
const text = document.getElementById("text")
function addTask(){
    if (text.value === "") return
    const newElement = document.createElement("li")
    newElement.addEventListener("click", () => {
        newElement.remove()
    })
    newElement.textContent = text.value
    list.appendChild(newElement)
    text.value = ""
}
button.addEventListener("click", addTask)

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, 
// elimina el párrafo del DOM

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> 
// con el mensaje "Nuevo Contenido"

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el 
// mensaje "¡Hola!" al hacer clic

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, 
// el <div> se debe actualizarse mostrando lo que se escribe

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo 
// del <body> a un color diferente