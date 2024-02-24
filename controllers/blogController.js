// controllers/blogController.js
const BlogPost = require('../models/BlogPost');

const createBlogPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const newBlogPost = new BlogPost({
      title,
      content,
    });

    const savedPost = await newBlogPost.save();
    res.json(savedPost);
  } catch (error) {
    res.status(500).json({ error: 'Error saving blog post' });
  }
};

const getAllBlogPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving blog posts' });
  }
};

module.exports = { createBlogPost, getAllBlogPosts };
