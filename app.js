const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000

const dbUrl = 'mongodb+srv://edgarlevy81:851LZLbpKSJxuocu@cluster0.tagle56.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace 'my_database' with your preferred database name.

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost ${port}`)
})