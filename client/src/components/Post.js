// Make individual post components
export default function Post({ post }) {
    // Determine whether or not this post links Spotify content
        // TODO: Make this a Schema function instead?
    let embed = null
    if (post.uri != null) {
        embed = "<div id=" + post._id + "></div>"
        // implement the window.onSpotifyIFrameApiReady() somewhere, probably in app.js ?
    }
    
    return (
        <div className='post'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            {embed}
        </div>
    )
}