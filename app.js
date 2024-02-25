const express = require('express')
const bodyParser = require('body-parser');
const connectDB = require('./databases/db');
const connectDBS = require('./databases/sequelize');
const dbConnection = require('./databases/dbConnection')
//const connectDB1 = require('./databases/database');
const blogRoutes = require('./routes/blogRoutes');
//const userRoutes = require('./routes/userRoutes');

const app = express()
const port = 3000

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Connect to the database
connectDB();
connectDBS();
dbConnection();
//connectDB1();

// Set up routes
app.use('/', blogRoutes);
// Set up user routes
//app.use('/', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})