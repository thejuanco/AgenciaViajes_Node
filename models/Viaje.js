import { DataTypes } from "sequelize";
import db from "../config/db.js";

export const Viaje = db.define("viajes", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.STRING,
  },
  fecha_ida: {
    type: DataTypes.DATE,
  },
  fecha_vuelta: {
    type: DataTypes.DATE,
  },
  imagen: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  disponibles: {
    type: DataTypes.STRING,
  },
  slug: {
    type: DataTypes.STRING,
  },
});
