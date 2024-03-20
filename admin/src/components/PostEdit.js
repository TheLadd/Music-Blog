import {useState, useEffect} from "react"
import { useForm } from "react-hook-form"
import { getPosts } from "../functions/getPosts"
import { sendEdit } from "../functions/sendEdit"

import PostSelect from "./PostSelect"

export default function PostEdit() {
    const [posts, setPosts] = useState([]);

    // Fetch posts from backend so that we can choose which one to edit
    useEffect( () => {
        getPosts()
            .then(response => {
                const myPosts = JSON.parse(response.message)
                setPosts(myPosts)
            })
    }, [])

    const { register, handleSubmit } = useForm()
    const onError = (errors, e) => { console.log("PostEdit encountered error", errors) }
    
    return (
        <form onSubmit={handleSubmit(sendEdit, onError)}>
            <ul>
                <li>
                    <PostSelect posts={posts} register={register}/>
                </li>

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

                <li>
                    <input type="submit"></input>
                </li>
            </ul>
        </form>
    )
}