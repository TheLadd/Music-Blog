const express = require('express')
const Post = require('../schemas/Post.js')
// const mongoose = require('../db.js)


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
    getPost()
    response.status(200).json({
        message: "Entered a new post into the db!"
    });
})

module.exports = router;