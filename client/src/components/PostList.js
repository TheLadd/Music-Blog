import Post from './Post'

export default function PostList({ posts }) {
    return (
        <>{
            posts.map(post => {
                return <Post key={post._id} id={post._id} post={post}/>
            })
        }</>
    )
}