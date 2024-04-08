import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import PostUpload from './components/pages/PostUpload'
import PostEdit from './components/pages/PostEdit'
import PostDelete from './components/pages/PostDelete'
import ProjectUpload from './components/pages/ProjectUpload';
import ProjectEdit from './components/pages/ProjectEdit'
import ProjectDelete from './components/pages/ProjectDelete';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route path='/' element={<Navigate to="/blog/post" />} /> */}
          <Route path='/' element={ <Navigate to="/portfolio/delete" />} />

          <Route path='/blog/post' element={ <PostUpload /> } />
          <Route path='/blog/edit' element={ <PostEdit /> } />
          <Route path='/blog/delete' element={ <PostDelete /> } />

          <Route path='/portfolio/post' element={ <ProjectUpload />} />
          <Route path='/portfolio/edit' element={ <ProjectEdit />} />
          <Route path='/portfolio/delete' element={ <ProjectDelete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
