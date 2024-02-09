import './App.css';
import {useState, useEffect} from "react"
import { getPosts } from "./functions/blog"
import PostList from './components/PostList'

function App() {
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
            })
            .catch(err => console.log("App.js/getPosts error:\n", err))
    }, []);

    console.log("posts: ", typeof(posts), posts)
    return (
            <div className="App">
                <h1>I'm testing</h1>
                <PostList posts={posts}/>
            </div>
    );
}

export default App;
