import { useState, useEffect } from "react"
import { getPosts } from '../../functions/getPosts'
import { sendDelete } from '../../functions/sendDelete'

import PostForm from '../PostForm'
import PostSelect from '../PostSelect'

export default function PostDelete() {
    const onError = ( errors, e ) => { console.log("PostDelete encountered error",  errors)}
    const [ posts, setPosts ] = useState([])

    useEffect( () => {
        getPosts()
            .then( response => {
                const myPosts = JSON.parse(response.message)
                setPosts(myPosts)
            })
            .catch( err => { console.log('Error in getting posts: ', err)})
    }, [])

    // Set PostForm child component params
    const SelectParams = { posts: posts }

    return (
        <PostForm
            onSubmit={ sendDelete }
            onError={ onError }
            elems={ [ PostSelect ] }
            params={[ SelectParams ]}
        />
    )
}