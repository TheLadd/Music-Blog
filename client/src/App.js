import './App.css';
import {useState, useEffect} from "react"
import { getPosts } from "./functions/blog"
import PostList from './components/PostList'

function App() {
    const [posts, setPosts] = useState([]);
    

    useEffect( () => {
        console.log('useEffect is running')
        getPosts()
            .then(response => {
                const myPosts = JSON.parse(response.message)
                console.log("posts: ", typeof(myPosts), myPosts)
                setPosts(myPosts);
                // setPosts(response.message);
            })
            .catch(err => console.log("setPosts ran unsuccseffuly\n", err))
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
