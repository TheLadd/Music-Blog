import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PostUpload from './components/PostUpload'
import PostEdit from './components/PostEdit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route path='/' element={ <PostUpload /> } /> */}
          <Route path='/' element={ <PostEdit /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
