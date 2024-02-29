function Embed({ uri }) {
    // Determine whether or not this post links Spotify content
    if (uri === null) {
        return null
    }
    return <div className="embed" id={uri}></div>
}

function PostDate({ date }) {
    if (date === null) {
        return null
    }
    return <div className="PostDate"></div>
}


export default function Post({ post }) {
    // Make individual post components
    return (
        <div className='post'>
            <div>
                <h3>{post.title}</h3>
                <PostDate date={post.createdAt} />
                <p>{post.body}</p>
            </div>
            <Embed uri={post.uri} />
        </div>
    )
}