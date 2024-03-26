import {useState, useEffect} from "react"
import { getPosts } from "../../functions/getPosts"
import { sendEdit } from "../../functions/sendEdit"

import PostForm from '../PostForm'
import PostSelect from "../PostSelect"
import PostInfo from "../PostInfo"

export default function PostEdit() {
    const onError = (errors, e) => { console.log("PostEdit encountered error", errors) }
    const [posts, setPosts] = useState([]);

    // Fetch posts from backend so that we can choose which one to edit
    useEffect( () => {
        getPosts()
            .then(response => {
                const myPosts = JSON.parse(response.message)
                setPosts(myPosts)
            })
    }, [])


    // Set params of componenets to be fed into the PostForm
    const SelectParams = { posts: posts }
    const InfoParams = {}
    
    return (
        <PostForm 
            onSubmit={ sendEdit }
            onError={ onError }
            elems={[ PostSelect, PostInfo ]} 
            params={[ SelectParams, InfoParams ]} 
        />
    )
}