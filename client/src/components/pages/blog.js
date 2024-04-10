import {useState, useEffect} from "react"
import { getPosts } from "../../functions/blog"

//Components
import Nav from '../Nav'
import PostList from '../PostList'

export default function Blog() {
    const [posts, setPosts] = useState([]);
    
    // Fetch and initialize the value of posts
        // TODO: Figure out why this isn't just 'hard coded' above
            // Maybe it's because getPosts() is a promise?
    useEffect( () => {
        getPosts()
            .then(response => {
                // TODO: determine what the dtype of response.message before this cast
                const myPosts = JSON.parse(response.message)
                myPosts.sort( ( a, b ) => {
                    if (a.createdAt < b.createdAt) { return 1 }
                    if (a.createdAt > b.createdAt) { return -1 }
                    return 0
                })
                setPosts(myPosts);


                // Load in the scripts, soldier
                const LoadIFrameApiScript = document.createElement('script')
                LoadIFrameApiScript.src = "https://open.spotify.com/embed/iframe-api/v1"
                LoadIFrameApiScript.async = true

                const IFrameOnReadyScript = document.createElement('script')
                IFrameOnReadyScript.src = "iFrameReady.js"
                IFrameOnReadyScript.type = "text/javascript"

                document.body.append(LoadIFrameApiScript)
                document.body.append(IFrameOnReadyScript)
            })
            .catch(err => console.log("App.js/getPosts error:\n", err))
    }, []);

    return (
        <>
            <Nav activePage={1}/>
            <PostList posts={posts}/>
        </>
    )
}