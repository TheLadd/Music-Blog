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
        // default: () => Date.now()
    }
})

// // This should be on frontend? No point in having it in the backend
// postSchema.methods.embed = function() {
//     // Makes a div for iFrameAPI to fill w/ an embed IFF the post contains a URI
//     if (self.uri === null) {
//         return "<div className=hasEmbed></div>"
//     }
//     return null 
// }

module.exports = mongoose.model("Posts", postSchema)