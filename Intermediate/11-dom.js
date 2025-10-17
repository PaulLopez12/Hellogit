// Manejo del DOM (Document Object Model)

// - Selección de elementos

// Métodos básicos (selector HTML)

const myElmentById = document.getElementById("id")
const myElementsByClass = document.getElementsByClassName("class")
const MyElementsByTag = document.getElementsByTagName("tag")

// Métodos más modernos (selector CSS)
document.querySelector(".paragraph")
document.querySelectorAll(".paragraph")

// - Manipulación de elementos
const tittle = document.getElementById("tittle")
tittle.textContent = "Hola JavaScript"

const container = document.querySelector(".container")
container.innerHTML = "<p>Esto es un nuevo párrafo</p> " 

// - Modificación de atributos
const link = document.querySelector("a")
const url = link.getAttribute("href")

// Establecimiento del atributo
link.setAttribute("href", "https://example.com")

// Comprobación de atributo
const hasTarget = link.hasAttribute("target")

// Eliminación de atributos
link.removeAttribute("target")

// - Interacción con clases CSS
const box = document.querySelector(".box")
box.classList.add("Selected")
box.classList.remove("Selected")
box.classList.toggle("Selected")

const button = document.querySelector("button")
button.style.backgroundColor = "blue"
button.style.color = "white"
button.style.padding = "10px"

// - Creación y eliminación de elementos

// Creación
const newParagraph = document.createElement("p")
newParagraph.textContent = "Este es un nuevo párrafo creado desde JS"
newParagraph.style.padding = "8px"

container.appendChild(newParagraph)

const itemsList = document.querySelector("ul")
const newItem = document.createElement("li")
newItem.textContent = "Nuevo elemento"

// Inserción en lugar concreto

const secondItem = itemsList.children[1]
itemsList.insertBefore(newItem, secondItem)

itemsList.append(newItem) //inserta al final del listado
itemsList.prepend(newItem) // inserta al principio del listado
secondItem.before(newItem)
secondItem.after(newItem)

// Eliminación
newParagraph.remove()

// Eliminación tradicional
const parent = newParagraph.parentElement
parent.removeChild("newParagraph")

// Elementos del DOM
function showMsg(){
    alert("Clic!")
}
const sendButton = document.querySelector("#send")
sendButton.addEventListener("click", showMsg)

sendButton.addEventListener("click", () => {
    alert("Clic con una arrow function!")
})

// Eventos comunes
document.addEventListener("DOMContentLoader", () => {
    console.log("El DOM está completamente cargado")
})

sendButton.addEventListener("mouseenter", () => {
    sendButton.style.backgroundColor = "green"
})

sendButton.addEventListener("mouseleave", () => {
    sendButton.style.backgroundColor = "blue"
})

const form = document.querySelector(form)
form.addEventListener("submit", (event) => {
    //Codigo
})

// 