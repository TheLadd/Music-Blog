function Embed({ uri }) {
    // Determine whether or not this post links Spotify content
    if (uri === null) {
        return null
    }
    return <div className="hasEmbed" id={uri}></div>
}


export default function Post({ post }) {
    // Make individual post components
    return (
        <div className='post'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Embed uri={post.uri} />
        </div>
    )
}