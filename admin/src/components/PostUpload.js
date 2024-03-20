import { useForm } from "react-hook-form"
import { sendPost } from '../functions/sendPost'

export default function PostUpload() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data, e) => { 
        sendPost(data) 
    }
    const onError = (errors, e) => { console.log("PostUpload encountered error", errors) }

    return (
        <form action="http://localhost:8080/blog/post" method="POST" onSubmit={ handleSubmit(onSubmit, onError) }>
        <ul>
            <li>
                <label htmlFor='title'>Title: </label>
                <input type='text' id='title' name="title" {...register('title')} />
            </li>
            <li>
                <label htmlFor='body'>Body: </label>
                <input type='text' id='body' name="body" {...register('body')} />
            </li>
            <li>
                <label htmlFor='uri'>URI: </label>
                <input type='text' id='uri' name="uri" {...register('uri')} />
            </li>
            <li>
                <input type="submit"></input>
            </li>
        </ul>
        </form>
    )
}