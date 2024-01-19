import './App.css';
import {useState, useEffect} from "react"


/* Functions */
import { getTest } from "./functions/test"



function App() {
    const [data, setData] = useState("Hello World!");
    useEffect( () => {
        getTest()
            .then(response => {
                setData(response.message);
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <div className="App">
            <h1>{data}</h1>
        </div>
    );
}

export default App;
