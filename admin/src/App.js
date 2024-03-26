import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PostUpload from './components/pages/PostUpload'
import PostEdit from './components/pages/PostEdit'
import PostDelete from './components/pages/PostDelete'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={ <PostUpload /> } />
          <Route path='/edit' element={ <PostEdit /> } />
          <Route path='/delete' element={ <PostDelete /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
