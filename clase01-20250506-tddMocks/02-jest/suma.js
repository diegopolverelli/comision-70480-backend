const suma=( ...sumandos)=>{  // los ... son en este contexto el operador REST
    if(sumandos.length==0) return null
    if(!sumandos.every(e=>typeof e=="number")) return "error"
    return sumandos.reduce((acum, valor)=>acum+=valor, 0)
}

module.exports={suma}