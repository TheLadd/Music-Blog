function getUriType(uri) {
    const startOfType = uri.indexOf(':')+1
    const endOfType = uri.indexOf(':', startOfType)
    const type = uri.substring(startOfType, endOfType)
    return type
}

function getEmbedSize(type) {
    // Determines appropriate SpotifyEmbed widht, height based on
    // the type of embedded content
    // Return: 
        // width, height
    return (type === 'playlist' || type === 'album') ? [300, 355] : ['80%', 80]
}

window.onSpotifyIframeApiReady = ( iFrameAPI ) => {
    // Load Embeds
    document.querySelectorAll(".embed").forEach( post => {
        const type = getUriType(post.id)
        const size = getEmbedSize(type)

        // Edit parent element styling based on content type
            // NOTE: this could've been done in the Post component, but is done
            // here instead because 'type' must be accessed here in order to 
            // determine Embed size
        if (type !== 'playlist' && type !== 'album') {
            post.parentNode.style.flexDirection = 'column';
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