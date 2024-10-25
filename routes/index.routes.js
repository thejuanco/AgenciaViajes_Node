import express from 'express';

const router = express.Router()

router.get('/nosotros', function(req, res) {
    res.render('nosotros')
})

export default router