import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userData
      );
      if (response.status === 200) {
        setUser(response.data.user);
        navigate("/home");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed. Please check your credentials.");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-cover bg-[url('/istockphoto.jpeg')] h-screen flex flex-col">
      <div className="pt-20 pb-3 pr-20 pl-20 ml-100 mr-100">
        <img className="h-60 w-200" src="/Logo.png" alt="MyRide Logo" />
        <form onSubmit={submitHandler}>
          <h3 className="text-xl mb-2">What is your email?</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] rounded px-2 py-2 border border-black w-full text-lg"
            required
            type="email"
            placeholder="Enter your Email"
          />
          <h3 className="text-xl mb-2">What is your password?</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] rounded px-2 py-2 border border-black w-full text-lg"
            required
            type="password"
            placeholder="Enter your password"
          />
          <br />
          <br />
          <button className="bg-[#111] text-white font-semibold rounded px-2 py-2 border border-black w-full text-lg">
            Login
          </button>
          <br />
          <Link to="/UserSignUp" className="text-black text-xl">
            Create a new Account?
          </Link>
        </form>
      </div>
      <div className="ml-120 mr-120">
        <Link
          to="/CaptainLogin"
          className="flex justify-center bg-[#111] text-white font-semibold rounded px-2 py-2 border border-black w-full text-lg"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
