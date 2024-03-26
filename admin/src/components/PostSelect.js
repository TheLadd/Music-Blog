export default function PostSelect({ posts, register }) {
    const onPostSelect = () => {
        const select = document.getElementById('PostId')
        const targetId = select.options[ select.selectedIndex ].value
        const selectedPost = posts.find( post => post._id === targetId)

        if (document.getElementById('PostTitle')) {
            document.getElementById('PostTitle').value = selectedPost.title
            document.getElementById('PostBody').value = selectedPost.body 
            document.getElementById('PostUri').value = selectedPost.uri
        }
    }

    const PostOptions = posts.map( post => {
        return <option value={post._id}>{post.title}</option>
    })

    return (
        <>
            <li>
                <label htmlFor="PostId">Post: </label>
                <select id='PostId' name="PostId" onInput={onPostSelect} defaultValue="default"  {...register('id')}>
                    <option disabled={true} value='default'>-- Please Select --</option>
                    { PostOptions }    
                </select>
            </li>
        </>
    )
}