import fs from "fs"

console.log(`Process ID: pid`, process.pid)
console.log(`cwd`, process.cwd())
console.log(`platform`, process.platform)
console.log(`version`, process.version)

// console.log("Variables de entorno:", process.env)
console.log("Variables de entorno:", process.env.ANDROID_HOME)
console.log("Variables de entorno:", process.env.PRUEBA_PORT)

console.log("argumentos", process.argv)
