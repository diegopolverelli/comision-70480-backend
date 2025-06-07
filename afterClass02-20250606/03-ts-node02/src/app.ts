import express from 'express';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/saludo',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('Hola...!!!');
})

app.get('/saludo2',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('Chau...!!!');
})

app.get('/persona',(req,res)=>{

    let {nombre, edad1}=req.query

    let edad:number=Number(edad1)

    if(!nombre){
        res.setHeader('Content-Type','application/json');
        res.status(400).json({error:`Error...!!!`})
        return 
    }

    let persona={
        nombre:"Maria", edad:29
    }

    persona={
        nombre:"Pedro", edad:18
    }

    res.setHeader('Content-Type','text/plain');
    res.status(200).send(persona);
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
