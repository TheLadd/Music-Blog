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