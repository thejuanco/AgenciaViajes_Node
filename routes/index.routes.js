import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje,
} from "../controller/paginaController.js";

import { guardarTestimoniales } from "../controller/testimonialController.js";

const router = express.Router();

router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/viajes", paginaViajes)
router.get("/viajes/:slug", paginaDetalleViaje)
router.get("/testimoniales", paginaTestimoniales)
router.post("/testimoniales", guardarTestimoniales)

export default router;
