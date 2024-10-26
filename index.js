import express from 'express';
import router from './routes/index.routes.js';

const app = express();

//Definir el puerto
const port = process.env.PORT || 4000;

//Habilitar Pug
app.set('view engine', 'pug')
//Habilitar carpeta publica
app.use(express.static('public'))

//Obtener el año actual
app.use((req, res, next) => {
    //res.locals.year = new Date().getFullYear(); //locals es propio de express
    const year = new Date()
    res.locals.actualYear = year.getFullYear()
    next();
})

//Rutas
app.use('/',router)

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})
