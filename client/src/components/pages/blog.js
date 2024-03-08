import {useState, useEffect} from "react"
import { getPosts } from "../../functions/blog"

//Components
import PostList from '../PostList'
import BlogNav from '../BlogNav'

export default function Blog() {
    const [posts, setPosts] = useState([]);
    
    // Initialize the value of posts
        // TODO: Figure out why this isn't just 'hard coded' above
            // Maybe it's because getPosts() is a promise?
    useEffect( () => {
        getPosts()
            .then(response => {
                // TODO: determine what the dtype of response.message before this cast
                const myPosts = JSON.parse(response.message)
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
        <div className="blog">
            <BlogNav />
            <PostList posts={posts}/>
        </div>
    )
}