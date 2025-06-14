import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('pruebasql', 'root', '123', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error.message);
}