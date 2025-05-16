import __dirname, { logger, logger2, middLogg } from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';

import { router as vistasRouter } from './routes/vistasRouter.js';
import { router as heroesRouter } from './routes/heroesRouter.js';

const PORT=3000;

const app=express();

app.use(middLogg)
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/public')));

app.use('/', vistasRouter)
app.use('/api/heroes', heroesRouter)

app.get("/api/logs", (req, res)=>{
    req.logger.error("prueba error")
    req.logger.log("error", "prueba 2 de error")

    req.logger.warn("warning")
    req.logger.info("info")
    req.logger.http("http")
    req.logger.debug("debug")
    req.logger.verbose("verbose")
    req.logger.silly("silly")

    console.log(`\n\n`)
    logger2.grave("error grave")
    logger2.medio("error medio")
    logger2.leve("error leve")

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Logs ejecutados"});
})

app.get("/apagar", (req, res)=>{
    setTimeout(() => {
        server.closeAllConnections()
        server.close()
        
    }, 3000);
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"El server se apagara pronto"});
})

const server=app.listen(PORT,()=>{
    // console.log(`Server escuchando en puerto ${PORT}`);
    logger.info(`Server escuchando en puerto ${PORT}`);
});


