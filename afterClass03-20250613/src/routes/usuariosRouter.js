import { Router } from 'express';
import { UsersModel } from '../model/usuariosModel.js';
export const router=Router()

router.get('/',async(req,res)=>{

    let usuarios=await UsersModel.findAll()

    res.setHeader('Content-Type','application/json')
    res.status(200).json({usuarios})
})

router.post("/", async(req,res)=>{
    let {name, email}=req.body
    if(!name || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`email y name son requeridos`})
    }

    try {
        let nuevoUsuario=await UsersModel.create({name, email})

        res.setHeader('Content-Type','application/json');
        return res.status(201).json({message:`Usuario creado con éxito`, nuevoUsuario});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`error: ${error.message}`})
    }

})