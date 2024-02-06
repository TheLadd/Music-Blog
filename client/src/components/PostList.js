import Post from './Post'

export default function PostList({ posts }) {
    return (
        <div className='PostList'>{
            posts.map(post => {
                return <Post key ={post._id} post={post}/>
            })
        }</div>
    )
}