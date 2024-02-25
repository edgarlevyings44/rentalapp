const { Sequelize } = require('sequelize');

const connectDBS = async () => {
  // Option 1: Passing a connection URI
  // const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
  const sequelize = new Sequelize('postgres://herman_user:sPi1Y2ChuhntYH0hUBnrmF6ohAEvi1i4@dpg-cndq3mf79t8c738f0ehg-a.oregon-postgres.render.com/herman', {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }); // Example for postgres

  // Option 2: Passing parameters separately (sqlite)
  // const sequelize = new Sequelize({
  //   dialect: 'sqlite',
  //   storage: 'path/to/database.sqlite'
  // });

  // Option 3: Passing parameters separately (other dialects)
  // const sequelize = new Sequelize('database', 'username', 'password', {
  //   host: 'localhost',
  //   dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  // });

  try {
    // Test the database connection
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = connectDBS
