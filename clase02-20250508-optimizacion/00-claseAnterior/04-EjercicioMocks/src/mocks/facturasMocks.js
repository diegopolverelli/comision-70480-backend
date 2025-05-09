import {fakerES as fa} from "@faker-js/faker"
const generaCliente=()=>{
    let nombre= fa.person.firstName()
    let apellido= fa.person.lastName()
    let dni= fa.number.int({min: 10_000_000, max: 40_000_000})
    let email= fa.internet.email({firstName:nombre, lastName:apellido})

    return {
        nombre, apellido, dni, email
    }
}

// console.log(generaCliente())

const generaProducto=()=>{
    let producto=fa.commerce.product()
    let precio=fa.number.float({min:1500, max:18200, multipleOf: .25})
    let cantidad=fa.number.int({min:1, max:100})
    let id=fa.database.mongodbObjectId()

    return {producto, precio, cantidad, id}
}

// console.log(generaProducto())
export const generaFactura=()=>{
    let nroComp="00002-000"+fa.string.numeric({length:5})
    let fecha=fa.date.past()
    let cliente=generaCliente()
    let carrito=[]
    let total=0
    for(let i=0; i<fa.number.int({min:1, max:20});i++){
        let producto=generaProducto()
        carrito.push(producto)
        total+=producto.precio*producto.cantidad
    }

    return {
        nroComp,
        fecha,
        cliente, 
        carrito, 
        total
    }
}