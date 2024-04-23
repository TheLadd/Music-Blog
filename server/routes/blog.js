const express = require('express')
const mongoose = require('mongoose')
const Post = require('../schemas/Post.js')

// NOTE: the database is accessed via the 'Post' model, which corresponds to the 'posts' collection
const router = express.Router()

router.use('/', (req, res, next) => {

    res.status(200).json({
        status: 'success',
        data: {
            name: 'ribera-personal-site, test',
            version: '0.1.0'
        }
    });

});

router.get('/get', async (request, response) => {
    // Get all posts
    allPosts = await Post.find()
    response.status(200).json({
        message: JSON.stringify(allPosts) 
    });
})

router.post('/post', async (request, response) => {
    // Create new post
    Post.create({
        title: request.body.title,
        body: request.body.body,
        uri: (request.body.uri == '') ? null : request.body.uri,
        createdAt: Date.now()
    })
    
    response.status(200).json({
        message: `Post titled ${request.body.title} received` 
    });
})

router.put('/put', async (request, response) => {
    // Recieve edit in the form of Post Objects
    try {
        const targetId = request.body.id
        const postUpdate = {}

        // Only update the editted values
        for (const [key, value] of Object.entries(request.body)) {
            if (value !== "" && value !== null && key != 'id') {
                postUpdate[key] = value
            }
        }
        
        const temp = await Post.findByIdAndUpdate(targetId, postUpdate)
        response.status(200).json({
            message: "Post edit processed"
        })
    }
    catch (err) {
        console.log('Error occured in recieving edit', err)
        response.status(500).json({
            message: `Error in processing edit: ${err}`
        })
    }
})

router.delete('/delete', async ( req, res ) => {
    try {
        await Post.findByIdAndDelete(req.body.id)
        res.status(200).json({
            message: `Post ${req.body.id} deleted`
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: `Issue proccessing delete request on server. Error: ${err}`
        })
    }
})

module.exports = router;