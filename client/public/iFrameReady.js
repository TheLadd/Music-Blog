function getUriType(uri) {
    // Parses SpotifyURI for type (i.e. 'track', 'playlist', etc.)
    const startOfType = uri.indexOf(':')+1
    const endOfType = uri.indexOf(':', startOfType)
    const type = uri.substring(startOfType, endOfType)
    return type
}

function getEmbedSize(type) {
    // Determines appropriate SpotifyEmbed width, height based on
    // the type of embedded content
    // Return: 
        // width, height
    return (type === 'playlist' || type === 'album') ? ['50%', null] : ['100%', 80]
}

window.onSpotifyIframeApiReady = ( iFrameAPI ) => {
    // Load Embeds
    document.querySelectorAll(".embed").forEach( post => {
        const type = getUriType(post.id)
        const size = getEmbedSize(type)

        // Edit parent-element's styling based on content type
            // NOTE: this could've been done in the Post component, but is done
            // here instead because 'type' must be accessed here in order to 
            // determine Embed size
                // *index.css assumes that any post w/ an Embed is a playlist/album
                // **would have CSS dynamically style the div.post:has(iframe.track, iframe.album),
                // but SpotifyIFrameAPI doesn't let me modify attributes of the iframe 
                // tag that it generates
        if (type !== 'playlist' && type !== 'album') {
            // Adjust format/position of Embed within a Post
            post.parentNode.style.flexDirection = 'column';
            
            // Adjust width of PostBody of *this* body
            post.parentNode.getElementsByClassName('PostText')[0].style.width = '100%';
        }
        else {
            post.parentNode.getElementsByClassName('PostText')[0].style.minWidth = '250px';
        }


        // Create/load Embed
        const element = post
        const options = {
            width: size[0], 
            height: size[1],
            uri: post.id
        }
        const callback = ( EmbedController ) => {}
        iFrameAPI.createController(element, options, callback)

    })
}