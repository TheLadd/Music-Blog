import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import PostUpload from './components/pages/PostUpload'
import PostEdit from './components/pages/PostEdit'
import PostDelete from './components/pages/PostDelete'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navigate to="/blog/post" />} />
          <Route path='/blog/post' element={ <PostUpload /> } />
          <Route path='/blog/edit' element={ <PostEdit /> } />
          <Route path='/blog/delete' element={ <PostDelete /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
