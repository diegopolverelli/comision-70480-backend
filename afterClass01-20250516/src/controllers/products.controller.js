import { ProductsDAO } from "../dao/ProductsDAO.js";

export const getProducts=async(req, res, next)=>{

    try {
        // console(hola)
        // let productos="productos"
        let productos=await ProductsDAO.get()
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({productos});
    } catch (error) {
        next(error)
    }
}

export const createProduct=async(req, res, next)=>{
    
    let {title, descrip, code, price, stock}=req.body
    if(!title || !code){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`title y code son requeridos`})
    }

    // validaciones quedan por cuenta del alumno

    try {
        // console(hola)
        // let nuevoProducto=`nuevo producto ${title}`
        let nuevoProducto=await ProductsDAO.create(req.body)  // no se manda body derecho...!!!
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoProducto});
    } catch (error) {
        next(error)
    }
}