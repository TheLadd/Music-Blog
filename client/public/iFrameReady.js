function getEmbedHeight(uri) {
    // Determines appropriate SpotifyEmbed height based on
    // the type of embedded content
    const startOfType = uri.indexOf(':')+1
    const endOfType = uri.indexOf(':', startOfType)
    const type = uri.substring(startOfType, endOfType)

    return (type === 'playlist') ? 355 : 150
}

window.onSpotifyIframeApiReady = ( iFrameAPI ) => {
    // Load Embeds
    document.querySelectorAll(".embed").forEach( post => {
        const element = post
        const options = {
            width: '300',
            // height: '400',
            height: getEmbedHeight(post.id),
            uri: post.id
        }
        const callback = ( EmbedController ) => {}
        iFrameAPI.createController(element, options, callback)
    })

    // Resize parent elements?
}