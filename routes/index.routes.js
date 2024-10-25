import express from 'express';

const router = express.Router()

router.get('/nosotros', function(req, res) {
    res.render('nosotros')
})

router.get('/', (req, res) => {
    res.render('inicio')
})

export default router