import passport from "passport"
import local from "passport-local"
import passportJWT from "passport-jwt"
import { generaHash, validaPass } from "../utils.js"
import { usersModel } from "../dao/models/user.model.js"
import { config } from "./config.js"

export const iniciarPassport=()=>{
    // paso 1
    passport.use("registro", 
        new local.Strategy(
            {
                passReqToCallback: true, 
                usernameField: "email"
            },
            async(req, username, password, done)=>{
                try {
                    let {apellido, nombre}=req.body
                    if(!nombre || !apellido){
                        console.log(`No llego el apellido`)
                        return done(null, false)
                    }

                    // validaciones... 
                    password=generaHash(password)
                    let nuevoUsuario=await usersModel.create({nombre, apellido, email: username, password})
                    return done(null, nuevoUsuario)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    passport.use("login", 
        new local.Strategy(
            {usernameField: "email"},
            async(username, password, done)=>{
                try {
                    let usuario=await usersModel.findOne({email:username}).lean()
                    if(!usuario){
                        return done(null, false)
                    }
                    
                    if(!validaPass(password, usuario.password)){
                        return done(null, false)
                    }

                    return done(null, usuario)

                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    passport.use("current", 
        new passportJWT.Strategy(
            {
                secretOrKey: config.SECRET, 
                jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken()
            }, 
            async(contenidoToken, done)=>{
                try {
                    return done(null, contenidoToken)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    // paso 1' (solo si uso sessions)
    // passport.serializeUser()
    // passport.deserializeUser()
}