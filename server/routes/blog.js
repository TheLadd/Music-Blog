const express = require('express')
const Post = require('../schemas/Post.js')

// NOTE: the database is accessed via the 'Post' model, which corresponds to the 'posts' collection

/* API Routes */
const router = express.Router()
router.get('/', async (request, response) => {
    allPosts = await Post.find()
    response.status(200).json({
        message: JSON.stringify(allPosts) 
    });
})

module.exports = router;