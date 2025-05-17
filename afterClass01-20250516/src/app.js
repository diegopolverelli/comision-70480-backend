import express from 'express';
import { config } from './config/config.js';
import { connDB } from './config/connDB.js';
import { errorHandler } from './middleware/errorHandler.js';
import passport from 'passport';
import { iniciarPassport } from './config/passport.config.js';

import { router as sessionsRouter } from './routes/sessionsRouter.js';
import { router as productsRouter } from './routes/productsRouter.js';
const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// paso 2
iniciarPassport()
app.use(passport.initialize())

app.use("/api/products", productsRouter)
app.use("/api/sessions", sessionsRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.use(errorHandler)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

connDB()