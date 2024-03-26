import { useForm } from "react-hook-form"
import { sendPost } from '../../functions/sendPost'

import PostForm from '../PostForm'
import PostInfo from '../PostInfo'

export default function PostUpload() {
    const onSubmit = (data, e) => { sendPost(data) }
    const onError = (errors, e) => { console.log("PostUpload encountered error", errors) }

    // Set params for components to pass to PostForm
    const InfoParams = {}

    return (
        <PostForm 
            onSubmit={ onSubmit }
            onError={ onError }
            elems={ [PostInfo] }  
            params={ [InfoParams] } 
        />
    )
}