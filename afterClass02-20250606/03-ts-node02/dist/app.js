"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
});
app.get('/saludo', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('Hola...!!!');
});
app.get('/saludo2', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('Chau...!!!');
});
app.get('/persona', (req, res) => {
    let { nombre } = req.query;
    if (!nombre) {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).json({ error: `Error...!!!` });
        return;
    }
    let persona = {
        nombre: "Maria", edad: 29
    };
    persona = {
        nombre: "Pedro", edad: 18
    };
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(persona);
});
const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});
