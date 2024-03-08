import './App.css';
import Blog from './components/pages/Blog.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Blog />} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;
