import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ClienteDocument = HydratedDocument<Cliente>;

@Schema({
    timestamps:true,
    // strict: false,
    collection: "clientes2021"
})
export class Cliente {

    @Prop()
    razonSocial:string
    
    @Prop({unique:true, required:true})
    cuit:string
    
    @Prop({default:0})
    limiteCtaCte?:number
    
    @Prop({default:0})
    ctaCte:number

}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);




// const schemaCliente01=new mongoose.Schema(
//     {
//         nombre:{
//             type: String, 
//             required: true
//         },
//         ctaCte: Number
//     },
//     {
//         timestamps:true, 
//         // strict: false
//     }
// )