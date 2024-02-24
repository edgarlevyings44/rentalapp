// models/BlogPost.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const blogPostSchema = new Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
