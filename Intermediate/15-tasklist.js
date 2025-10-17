const text = document.getElementById("text")
const button = document.getElementById("button")
const list = document.getElementById("list")

function addTask() {
    if(text.value === "") return
    const newElement = document.createElement("li") // Crea elemento tipo lista
    newElement.addEventListener("click", () => {
        newElement.remove()
    })
    newElement.textContent = text.value // agrega el valor del texto al elemento creado
    list.appendChild(newElement) // añade al listado el nuevo elemento
    text.value = "" // Limpia el espacio escrito
}

button.addEventListener("click", addTask)

text.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        addTask()
    }
})