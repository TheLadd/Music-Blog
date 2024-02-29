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
    return (type === 'playlist' || type === 'album') ? [300, 355] : [300, 150]
}

window.onSpotifyIframeApiReady = ( iFrameAPI ) => {
    // Load Embeds
    document.querySelectorAll(".embed").forEach( post => {
        const type = getUriType(post.id)
        const size = getEmbedSize(type)

        // Edit parent element styling based on content type
        if (type !== 'playlist' && type !== 'album') {
            console.log(post)
            console.log(post.parentNode)
            post.parentNode.style.flexDirection = 'column';
            // post.closest('div').style.flexDirection = 'column';
        }

        // Create/load embed
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