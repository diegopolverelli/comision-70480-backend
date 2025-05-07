import { suma } from "./suma.js";
import colors from "colors"

console.log('\x1b[34m\x1b[1mTest función SUMA\x1b[0m');

let pruebas=0
let ok=0
let resultado
let esperado

console.time(`Demora en la ejecución de la prueba:`)
pruebas++
console.log(`Prueba ${pruebas}: si envío 2 argumentos numéricos, retorna la suma de ambos`)
resultado=suma(5, 6)
esperado=11
if(resultado==esperado){
    ok++
    console.log(`${"√".green} Prueba ${"OK".bgGreen.bold}`)
}else{
    console.log(`Prueba ${"fallida".bgRed.white.bold} - se esperaba ${String(esperado).green.bold}, se retorno ${String(resultado).red.bold}`)
}

pruebas++
console.log(`Prueba ${pruebas}: si no le envío argumentos, returna null`)
resultado=suma()
esperado=null
if(resultado===esperado){
    ok++
    console.log(`${"√".green} Prueba ${"OK".bgGreen.bold}`)
}else{
    console.log(`Prueba ${"fallida".bgRed.white.bold} - se esperaba ${String(esperado).green.bold}, se retorno ${String(resultado).red.bold}`)
}


pruebas++
console.log(`Prueba ${pruebas}: si envío argumento no numéricos retorna el string "error"`)
resultado=suma(10, "juan")
esperado="error"
if(resultado===esperado){
    ok++
    console.log(`${"√".green} Prueba ${"OK".bgGreen.bold}`)
}else{
    console.log(`Prueba ${"fallida".bgRed.white.bold} - se esperaba ${String(esperado).green.bold}, se retorno ${String(resultado).red.bold}`)
}


pruebas++
console.log(`Prueba ${pruebas}: si recibo n argumentos, todos numéricos, retona la suma de todos`)
resultado=suma(1, 2, 3, 4, 5)
esperado=15
if(resultado===esperado){
    ok++
    console.log(`${"√".green} Prueba ${"OK".bgGreen.bold}`)
}else{
    console.log(`Prueba ${"fallida".bgRed.white.bold} - se esperaba ${String(esperado).green.bold}, se retorno ${String(resultado).red.bold}`)
}

console.log("\n\n")
console.timeEnd(`Demora en la ejecución de la prueba:`)
console.log(`Pruebas realizadas: ${pruebas}; pruebas correctas: ${String(ok).green.bold}; pruebas fallidas: ${String(pruebas-ok).red.bold}`)