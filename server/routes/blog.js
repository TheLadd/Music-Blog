const express = require('express')
const Post = require('../schemas/Post.js')

// NOTE: the database is accessed via the 'Post' model, which corresponds to the 'posts' collection

async function addPost() {
    const post = await Post.create({ 
        title: "Test Title",
        body: "lorem ipsum delor something something"
    })
    console.log(post)
}

async function getPost() {
    const post = await Post.where('title').equals('Test Title')
    console.log(post)
}

/* API Routes */
const router = express.Router()
router.get('/', async (request, response) => {
    allPosts = await Post.find()
    response.status(200).json({
        message: JSON.stringify(allPosts) 
    });
})

module.exports = router;