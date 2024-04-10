const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    uri: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        // default: Date.now
    }
})

module.exports = mongoose.model("Posts", postSchema)