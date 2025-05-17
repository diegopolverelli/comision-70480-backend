import { productModel } from "./models/products.model.js";

export class ProductsDAO{
    static async get(){
        return productModel.find().lean()
    }

    static async create(product){
        return productModel.create(product)
    }
}