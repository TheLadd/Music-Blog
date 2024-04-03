import './App.css';
import Blog from './components/pages/Blog.js'
import Portfolio from './components/pages/Portfolio.js'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to="/blog" />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;
