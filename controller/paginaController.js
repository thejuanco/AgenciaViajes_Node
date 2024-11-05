import { Viaje } from '../models/Viaje.js'
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => {

  const promiseDB = []
  promiseDB.push( Viaje.findAll({limit: 3}))
  promiseDB.push( Testimonial.findAll({limit: 3}))

  //Consultar 3 viajes del modelo viaje
  try {
    //Ambas consultas arrancan al mismo tiempo
    const result = await Promise.all(promiseDB);

    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes: result[0],
      testimoniales: result[1]
    });
  } catch (error) {
    console.error(error);
  }
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

const paginaTestimoniales = async (req, res) => {
    try {
      const testimoniales = await Testimonial.findAll();

      res.render("testimoniales", {
        pagina: "Testimoniales",
        testimoniales
      })
    } catch (error) {
      console.log(error)
    }
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
