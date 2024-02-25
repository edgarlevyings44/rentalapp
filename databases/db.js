const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://ochiengherman32:GUPDUue9saOIQz37@cluster0.yqwpsv9.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connectDB;