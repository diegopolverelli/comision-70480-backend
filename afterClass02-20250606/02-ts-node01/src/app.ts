import express, { Request } from 'express';
import mongoose from "mongoose"
import cookieParser from "cookie-parser"

import { router as productsRouter } from './routes/productsRouter';


const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/products", productsRouter)

app.get('/',(req: Request,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/nombre',(req,res)=>{

    let nombre:string="Juan"
    // nombre=false

    res.setHeader('Content-Type','text/plain');
    res.status(200).send(nombre);
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
