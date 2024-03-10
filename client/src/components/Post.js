// function Embed({ uri }) {
//     // Determine whether or not this post links Spotify content
//     if (uri === null) {
//         return null
//     }
//     return <div className="embed" id={uri}></div>
// }

// function PostDate({ date }) {
//     if (date === null) {
//         return null
//     }
//     return <div className="PostDate"></div>
// }

import Embed from './Embed'
import PostText from './PostText'


export default function Post({ post }) {
    return (
        <div className='post'>
            <PostText post={post} />
            <Embed uri={post.uri} />
        </div>
    )
}