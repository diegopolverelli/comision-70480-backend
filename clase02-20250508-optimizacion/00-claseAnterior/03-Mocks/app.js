import {fakerES_MX as fa} from "@faker-js/faker"

for(let i=0; i<10; i++){
    console.log("\ngenero literario", fa.book.genre())
    console.log("serpiente", fa.animal.snake())
    console.log("Producto",fa.commerce.product())
    console.log("MongoID",fa.database.mongodbObjectId())
    let nombre=fa.person.firstName("female")
    let apellido=fa.person.lastName()
    console.log("nombre y apellido", nombre, apellido)
    console.log("email", fa.internet.email({ firstName: nombre, lastName: apellido, provider: "hotmail.com" }))
}