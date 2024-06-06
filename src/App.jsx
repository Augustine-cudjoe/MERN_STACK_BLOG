import React from 'react';
import Home from  './pages/Home'
import {Routes,Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Profile from './pages/Profile';
import Comment from './component/Comment';

import "./App.css"
const App=()=>{
   
  return(
    <div>
   
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/createpost' element={<CreatePost/>}/>
      <Route exact path='/posts/:id' element={<PostDetails/>}/>
      <Route exact path='/edit/:id' element={<EditPost/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      <Route exact path='/comment' element={<Comment/>}/>
      
      </Routes>
   
    </div>
  )
}
export default App;