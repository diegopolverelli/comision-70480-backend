import { Router } from 'express';
import passport from 'passport';
import jwt from "jsonwebtoken"
import { config } from '../config/config.js';
export const router=Router()

router.post(
    "/registro", 
    // paso 3
    passport.authenticate("registro", {session:false}),
    (req,res)=>{
        
        // passport deja en la req, una propiedad user, con los datos del usuario
        // tengo entonces un req.user, solo si supero el passport.authenticate

        res.setHeader('Content-Type','application/json')
        res.status(200).json({message: "Registro exitoso", usuarioGenerado: req.user})
    }
)

router.post(
    "/login", 
    passport.authenticate("login", {session:false}),
    (req, res)=>{
        // req.user

        let token=jwt.sign(req.user, config.SECRET, {expiresIn: "1h"})

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:`Login exitoso`, usuario: req.user, token});
    }

)