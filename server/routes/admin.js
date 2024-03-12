const express = require('express')
const Post = require('../schemas/Post')

const router = express.Router()
router.post('/post', async (request, response) => {
    console.log('message from admin page:\n', request.body)

    const newPost = {
        title: request.body.title,
        body: request.body.body,
        uri: (request.body.uri == '') ? null : request.body.uri,
        createdAt: Date.now()
    }
    Post.create(newPost)
})

module.exports = router