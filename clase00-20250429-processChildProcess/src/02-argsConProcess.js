const [,, ...argumentos]=process.argv  // ... son aquí el operador rest

// console.log(argumentos)

const posPort=argumentos.findIndex(a=>a=="--port")
if(posPort==-1){
    console.log(`Complete el argumento --port`)
    process.exit()
}

console.log(`Server corriendo en puerto ${argumentos[posPort + 1]}`)




