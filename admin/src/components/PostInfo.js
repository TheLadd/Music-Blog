export default function PostInfo({ register }) {
 return (
    <>
        <li>
            <label htmlFor="PostTitle">Title: </label>
            <input id="PostTitle" name="PostTitle" {...register('title')} />
        </li>

        <li>
            <label htmlFor="PostBody">Body: </label>
            <textarea id='PostBody' name='PostBody' {...register('body')} />
        </li>

        <li>
            <label htmlFor="PostUri">URI: </label>
            <input id='PostUri' name="PostUri" {...register('uri')} />
        </li>
    </>
 )   
}