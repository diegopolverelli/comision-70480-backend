import mongoose from "mongoose"

export const usersModel=mongoose.model(
    "users", 
    new mongoose.Schema(
        {
            nombre: String, 
            apellido: String, 
            email: {type: String, unique: true}, 
            password: String
        },
        {
            timestamps:true
        }
    )
)