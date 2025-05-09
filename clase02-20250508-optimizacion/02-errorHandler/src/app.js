import express from 'express';
import { router as heroesRouter } from './routes/heroesRouter.js';
import { errorHandler } from './middleware/errorHandler.js';

process.loadEnvFile("./.env")
const PORT=process.env.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/heroes', heroesRouter)


app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/prueba1',(req,res)=>{

    let {cantidad}=req.query
    if(!cantidad){
        throw new Error("No se encontro cantidad")
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:`Cantidad recibida ${cantidad}`});
})

app.get('/prueba2',async(req,res,next)=>{

    try {
        let {cantidad}=req.query
        if(!cantidad){
            throw new Error("No se encontro cantidad (controller async)")
        }
    
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:`Cantidad recibida ${cantidad}`});
    } catch (error) {
        // res.setHeader('Content-Type','application/json');
        // return res.status(400).json({error:`Error 2...!!!`})
        next(error)
    }
})

app.use(errorHandler)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
