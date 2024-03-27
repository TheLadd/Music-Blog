import './App.css';
import Blog from './components/pages/Blog.js'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to="/blog" />} />
                    <Route path='/blog' element={<Blog />} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;
