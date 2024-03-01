import PostDate from './PostDate'

export default function PostText({ post }) {
    return(
            <div>
                <h3>{post.title}</h3>
                <PostDate date={post.createdAt} />
                <p>{post.body}</p>
            </div>
    )}