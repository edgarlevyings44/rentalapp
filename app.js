const express = require('express')
const bodyParser = require('body-parser');
const connectDB = require('./db');
const blogRoutes = require('./routes/blogRoutes');

const app = express()
const port = 3000

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Connect to the database
connectDB();

// Set up routes
app.use('/', blogRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})