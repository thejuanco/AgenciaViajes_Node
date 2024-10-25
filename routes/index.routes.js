import express from 'express';

const router = express.Router()

router.get('/nosotros', function(req, res) {
    res.send('Estamos en la página de Nosotros')
})

export default router