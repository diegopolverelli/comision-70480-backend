import express from 'express';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/datos',async(req,res,next)=>{

    try {
        
        let respuesta=await fetch("http://s1:3000/usuarios")
        let usuarios=await respuesta.json()
        console.log(usuarios)
        console.log("Ruta /datos ejecutada; lee datos del contenedor s1")
    
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({usuarios});
    } catch (error) {
        next(error)
    }
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
