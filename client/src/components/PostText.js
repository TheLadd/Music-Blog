import PostDate from './PostDate'

export default function PostText({ post }) {
    return(
            <div className='PostText'>
                <h3>{post.title}</h3>
                <PostDate date={post.createdAt} />
                <p className='PostBody'>{post.body}</p>
            </div>
    )}