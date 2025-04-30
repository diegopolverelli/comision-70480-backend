// process.loadEnvFile("./src/.env")
// import dotenv from "dotenv"
// dotenv.config({
//     path: "./src/.env"

import { config } from "./config/config.js";

// console.log(`hola...!!!`)

// })
// console.log(config.SECRET)
// res.setHeader('Content-Type','application/json');
// return res.status(400).json({error:``})

// console.log(error);
// res.setHeader('Content-Type','application/json');
// return res.status(500).json(
//     {
//         error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
//         detalle:`${error.message}`
//     }
// )

import express from 'express';
const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

// res.setHeader('Content-Type','application/json');
// return res.status(400).json({error:``})

// let usuarios=[
//     {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
//     {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
//     {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
// ]