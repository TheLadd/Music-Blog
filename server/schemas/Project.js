const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    title: String,
    desc: String,
    repo: String,
    demo: String,
    dateCreated: Date
}) 

module.exports = mongoose.model('Projects', projectSchema)