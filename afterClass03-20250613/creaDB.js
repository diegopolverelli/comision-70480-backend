// const { Sequelize } = require('sequelize');
import {Sequelize} from "sequelize"

// Option 1: Passing a connection URI
// mysql://usuario:contraseña@localhost:3306/nombre_de_tu_db
const sequelize = new Sequelize('mysql://root:123@localhost:3306/')

const dbName=`pruebasql`

async function creaDB(){
    try {
        let sQuery=`CREATE DATABASE `
        sQuery+=`IF NOT EXISTS ${dbName}`

        let resultado=await sequelize.query(sQuery)
        console.log(resultado)
        console.log(`DB genarada...!!!`)
    } catch (error) {
        console.log("Error: ", error.message)
    }
}

creaDB()