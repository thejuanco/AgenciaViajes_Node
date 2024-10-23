import express from 'express';

const app = express();

//Definir el puerto
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})
