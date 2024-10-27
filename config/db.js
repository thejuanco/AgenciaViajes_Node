//Archivo para la configuración de la base de datos
import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_PASS, process.env.DATABASE_USER, {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

export default db;