const express = require('express');
const router = express.Router();
const blogPostController = require('../controllers/blogPostController');

router.post('/', blogPostController.createPost);
router.get('/', blogPostController.getAllPosts);

module.exports = router;