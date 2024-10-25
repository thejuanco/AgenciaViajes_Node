import express from 'express';
import router from './routes/index.routes.js';

const app = express();

//Definir el puerto
const port = process.env.PORT || 4000;

//Rutas
app.use(router)

app.get('/start', (req, res) => {
    res.send("Hola, bienvenido")
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})
