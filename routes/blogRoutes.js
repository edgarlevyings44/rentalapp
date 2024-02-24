// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const { createBlogPost, getAllBlogPosts } = require('../controllers/blogController');

router.post('/posts', createBlogPost);
router.get('/posts', getAllBlogPosts);

module.exports = router;
