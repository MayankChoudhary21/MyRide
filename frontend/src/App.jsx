import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignUp from "./pages/CaptainSignUp";
import UserProvider from "./context/UserContext"; // Import UserProvider

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/UserSignUp" element={<UserSignUp />} />
        <Route path="/CaptainLogin" element={<CaptainLogin />} />
        <Route path="/CaptainSignUp" element={<CaptainSignUp />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
