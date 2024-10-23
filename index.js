import express from 'express';

const app = express();

//Definir el puerto
const port = process.env.PORT || 4000;

app.get('/start', (req, res) => {
    res.send("Hola, bienvenido")
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})
