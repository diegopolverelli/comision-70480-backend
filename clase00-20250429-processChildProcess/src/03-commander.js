import {Command, Option} from "commander"

const program=new Command()

program.option("-p, --port <PORT>", "Puerto de escuchar del server", 3001)
// program.option("-u, --user <USER>", "Usuario que ejecutar el script")
program.option("-d, --debug", "Activa modo debug")
program.option("-c, --colors [COLORS...]", "Listado de colores")
program.option("-n, --numbers [NUMBERS...]", "Listado de numeros")
program.requiredOption("-u, --user <USER>", "Usuario que ejecuta el script")
program.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del script").choices(["dev", "prod", "test"]).default("dev"))


program.parse()
const opts=program.opts()

console.log(opts)

