const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://heafmcas:rlMvFmGaJ2wCcbtmXlFFZ-Dl_e6AhG6g@silly.db.elephantsql.com/heafmcas') // Example for postgres

const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully. Its great');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = dbConnection