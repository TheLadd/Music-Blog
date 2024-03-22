import {useState, useEffect} from "react"
import { useForm } from "react-hook-form"
import { getPosts } from "../functions/getPosts"
import { sendEdit } from "../functions/sendEdit"

import PostForm from './PostForm'
import PostSelect from "./PostSelect"
import PostInfo from "./PostInfo"

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

    // const { register, handleSubmit } = useForm()
    const onError = (errors, e) => { console.log("PostEdit encountered error", errors) }


    // Set params of componenets to be fed into the PostForm
    const SelectParams = {
        posts: posts
        // register: register
    }

    const InfoParams = {
        // register: register
    }
    
    return (
        <PostForm 
            // handleSubmit={ () => { handleSubmit(sendEdit, onError) } }
            onSubmit={ sendEdit }
            onError={ onError }
            elems={[ PostSelect, PostInfo ]} 
            params={[ SelectParams, InfoParams ]} 
        />
    )
}