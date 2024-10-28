import { Viaje } from '../models/Viaje.js'

const paginaInicio = (req, res) => {
  res.render("inicio", {
    pagina: "Inicio",
  });
};

const paginaNosotros = (req, res) => {
    res.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (req, res) => {
    //consultar DB
    const viajes = await Viaje.findAll()

    res.render("viajes", {
    pagina: "Próximos viajes",
    viajes
  });
}

const paginaTestimoniales = (req, res) => {
    res.render("testimoniales", {
    pagina: "Testimoniales",
  });
}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const {slug} = req.params

    try {
        const viaje = await Viaje.findOne({where: {slug}})
        res.render('viaje', {
            pagina: 'Detalle del viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}

export { 
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
 };
