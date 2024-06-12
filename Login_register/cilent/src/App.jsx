
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from './component/Signup';
import Login from './component/Login';
import Home from './component/Home';
import Main from './component/contain';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          
          <Route path='/main' element={<Main/>}/>
          


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

