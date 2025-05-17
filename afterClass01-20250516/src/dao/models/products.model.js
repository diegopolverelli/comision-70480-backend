import mongoose from "mongoose";

const productSchema=new mongoose.Schema(
    {
        title: String, 
        code: {type: String, unique:true, required:true}, 
        descrip: String, 
        stock: {type: Number, default: 0},
        price: {type: Number, default: 0}
    },
    {
        timestamps: true, 
        // collection: "prouductosBrazil2023", 
        strict: false, 
    }
)

export const productModel=mongoose.model(
    "products", 
    productSchema
)