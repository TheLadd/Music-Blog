const express = require('express')
const mongoose = require('mongoose')
const Post = require('../schemas/Post.js')

// NOTE: the database is accessed via the 'Post' model, which corresponds to the 'posts' collection
const router = express.Router()

router.get('/get', async (request, response) => {
    // Get all posts
    allPosts = await Post.find()
    response.status(200).json({
        message: JSON.stringify(allPosts) 
    });
})

router.post('/post', async (request, response) => {
    // Create new post
    const newPost = {
        title: request.body.title,
        body: request.body.body,
        uri: (request.body.uri == '') ? null : request.body.uri,
        createdAt: Date.now()
    }
    Post.create(newPost)
    
    response.status(200).json({
        message: `Post titled ${request.body.title} received` 
    });
})

router.put('/put', async (request, response) => {
    // Recieve edits in the form of Post Objects
    console.log(request.body)
    console.log(`idFilter: ${request.body.id}`)
    const postUpdate = {}

    // Only update the editted values
    for (const [key, value] of Object.entries(request.body)) {
        if (value !== "" && value !== null && key != 'id') {
            postUpdate[key] = value
        }
    }
    
    console.log(postUpdate)
    // Post.findOneAndUpdate(idFilter, postUpdate)
    const temp = await Post.findByIdAndUpdate(request.body.id, postUpdate)
    console.log(`Finished: ${temp}`)
})

module.exports = router;