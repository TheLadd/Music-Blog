function Embed({ uri }) {
    // Determine whether or not this post links Spotify content
    if (uri === null) {
        return null
    }
    return <div className="embed" id={uri}></div>
}


export default function Post({ post }) {
    // Make individual post components
    return (
        <div className='post'>
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
            <Embed uri={post.uri} />
        </div>
    )
}