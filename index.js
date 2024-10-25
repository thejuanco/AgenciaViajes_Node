import express from 'express';
import router from './routes/index.routes.js';

const app = express();

//Definir el puerto
const port = process.env.PORT || 4000;

//Habilitar Pug
app.set('view engine', 'pug')

//Rutas
app.use('/',router)

//Habilitar carpeta publica
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})
