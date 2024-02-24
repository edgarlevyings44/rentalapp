const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://edgarlevy81:851LZLbpKSJxuocu@cluster0.tagle56.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connectDB;