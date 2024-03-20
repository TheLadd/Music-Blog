export default function PostSelect({ posts, register }) {
    const onPostSelect = () => {
        const select = document.getElementById('PostId')
        const targetId = select.options[ select.selectedIndex ].value
        const selectedPost = posts.find( post => post._id == targetId)

        document.getElementById('PostTitle').value = selectedPost.title
        document.getElementById('PostBody').value = selectedPost.body 
        document.getElementById('PostUri').value = selectedPost.uri
    }

    return (
        <>
            <label htmlFor="PostId">Post: </label>
            <select id='PostId' name="PostId" onInput={onPostSelect} {...register('id')}>{
                posts.map( post => {
                    return <option value={post._id}>{post.title}</option>
                })
            }</select>
        </>
    )
}