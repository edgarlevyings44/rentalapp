const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('postgresql://xpzqdfgs:IHMQ5kC5phJNpB7CueyxOPeBqa7qgRJ5@surus.db.elephantsql.com/xpzqdfgs') // Example for postgres

const connectDB1 = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
  
module.exports = connectDB1;