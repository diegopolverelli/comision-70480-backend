import { modeloDatos } from "./models/datos.model.js";

export class FacturasDAO{
    static async get(){
        return await modeloDatos.find().lean()
    }

    // prueba(){
    //     console.log("hola")
    // }
}

// FacturasDAO.get()
// let factura01=new FacturasDAO()
// factura01.prueba()