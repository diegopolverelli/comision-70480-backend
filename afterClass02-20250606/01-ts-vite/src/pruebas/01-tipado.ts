export const tipado="Tipado con Typescript"

console.log("hola...!!!")

let nombre:string="Pedro"
console.log(nombre)

let dato:string|number

dato=100
dato="Hola"
// dato=false

type PersonaType={
    nombre:string 
    email: string
    edad?: number
}

let persona01:PersonaType

persona01={
    nombre:"Marcela",
    email:"marce@test.com",
    // sexo:"F"
    // edad:false
}

const buscaPersona=async()=>{
    return {nombre:"Julia", edad:29, email:"julia@test.com"}
}

let persona02:PersonaType

persona02=await buscaPersona()

console.log(persona02)

const suma=(a: number, b:number):number=>{

    return a+b
}

console.log(suma(100, 200))


class Persona{
    nombre:string
    apellido:string

    constructor(nombre:string, apellido:string){
        this.nombre=nombre
        this.apellido=apellido
    }

    saludo(){
        return `Hola soy ${this.nombre}`
    }
}

let persona03:Persona=new Persona("Laura", "Baez")

console.log(persona03)
console.log(persona03.saludo())

// class Heroe{
//     name:string="Batman"
//     id:number=100
// }