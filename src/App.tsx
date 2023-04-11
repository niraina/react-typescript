import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Posts />}/>
          <Route path='/:id' element={<Post />}/>
        </Routes>
    </div>
  );
}

export default App;
