import express from 'express';
import router from './routes/index.routes.js';
import db from './config/db.js';

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
    res.locals.nombreSitio = "Agencia de Viajes"
    res.locals.actualYear = year.getFullYear()
    next();
})

//Leer datos del formulario
app.use(express.urlencoded({extended: true}))

//Rutas
app.use('/',router)

//Probando la conexión con la base de datos
try {
    await db.authenticate()
    console.log('Connection has been established successfully.')
    db.sync();
} catch (error) {
    console.error(error)
}

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})
