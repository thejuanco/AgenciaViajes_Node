const guardarTestimoniales = (req, res) => {
    //Validar
    const {nombre, correo, mensaje} = req.body

    const errores = []

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre esta vacio'})
    }

    if(correo.trim() === ''){
        errores.push({mensaje: 'El correo esta vacio'})
    }

    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje esta vacio'})
    }

    console.log(errores)

    if(errores.length > 0){
        //Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje
        })
        return
    }
}

export {
    guardarTestimoniales,
}