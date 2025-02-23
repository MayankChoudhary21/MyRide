import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignUp from './pages/CaptainSignUp';


const App=()=>
{
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/UserSignUp" element={<UserSignUp />} />
        <Route path="/CaptainLogin" element={<CaptainLogin />} />
        <Route path="/CaptainSignUp" element={<CaptainSignUp />} />
      </Routes>
    </div>
  )
}

export default App; 