const express = require('express')
const Post = require('../schemas/Post')

const router = express.Router()
router.post('/post', async (request, response) => {
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

router.delete('/delete', async  (req, res) => {
    console.log(req.body)
})

module.exports = router