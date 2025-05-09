import { generaFactura } from "../../mocks/facturasMocks.js";
import { FacturasDAO } from "../FacturasDAO.js";
import { modeloDatos } from "../models/datos.model.js";

export const getFacturas=async(req, res)=>{
    try {
        let facturas = await FacturasDAO.get()
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({facturas});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado`})       
    }
}

export const mockFacturas=async(req, res)=>{
    let {cantidad=1, db}=req.query

    let facturas=[]
    for(let i=0; i<cantidad; i++){
        facturas.push(generaFactura())
    }

    if(db){
        try {
            facturas=await modeloDatos.insertMany(facturas)
        } catch (error) {
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({error:`Error al grabar en DB`})
        }
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({facturas});

}