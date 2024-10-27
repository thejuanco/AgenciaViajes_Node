import express from 'express';

const router = express.Router()

router.get('/nosotros', function(req, res) {
    res.render('nosotros', {
        pagina: 'Nosotros',
    })
})

router.get('/', (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio',
    })
})

router.get('/testimoniales', (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales',
    })
})
router.get('/viajes', (req, res) => {
    res.render('viajes', {
        pagina: 'Viajes',
    })
})

export default router