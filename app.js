const express = require('express')
const blogPostRoutes = require('./routes/blogPostRoutes');
const chairRoutes = require('./routes/chairs');
const bodyParser = require('body-parser'); // Add body-parser middleware
const connectDB = require('./db');


const app = express()
const port = 3000

// Middleware to parse JSON requests
app.use(bodyParser.json());
connectDB();

app.use('/posts', blogPostRoutes);   
app.use('/chairs', chairRoutes); 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})