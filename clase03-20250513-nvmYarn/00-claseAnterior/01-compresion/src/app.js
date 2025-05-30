import express from 'express';
import handlebars from 'express-handlebars'
import compression from "express-compression"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(compression())  // x defecto gzip
app.use(compression({
    brotli:{enabled:true}
}))
app.use(express.static("./src/public"))
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')


app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

// app.get("/heroes", compression(), (req, res)=>{
app.get("/heroes", (req, res)=>{
    
    res.render("prueba")
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
