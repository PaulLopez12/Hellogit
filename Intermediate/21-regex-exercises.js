// 1. Crea una RegEx que valide correos electrónicos
const regex = RegExp("@email.com")
const mail = ["mamayema@email.com", "mamawebo@email.com", "triplemardita32@gmail.com"]

for(email in mail){
    if(regex.test(mail) === true){
        console.log("Es un correo válido")
    }else{
        console.log("No es un correo válido")
    }
}

// 2. Crea una RegEx obtenga Hashtags de un Texto
const text = "Estes es un texto de #prueba para ver si contiene el caracter #Hashtag"
const regex2 = /#\w+/g
const hashtags = text.match(regex2)
const counter = hashtags? hashtags.length : 0
console.log(`El texto tiene ${counter} hashtags:`)
console.log(hashtags)

// 3. Crea una RegEx que valide contraseñas seguras (mínimo 8 caracteres, al menos 
// una letra y un número)
const regex3 = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/
const passwords = ["daousihasdaisd", "Nuevacontraseña12", "ayaAya465", "nope123"]

passwords.forEach(password => {
    console.log(`"${password}" -> ${regex3.test(password)}`)
})



// NOTA: Aplícalas utilizando diferentes operaciones