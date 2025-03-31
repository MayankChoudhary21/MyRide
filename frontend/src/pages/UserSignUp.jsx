import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };
    console.log(newUser);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );

      if (response.status === 201) {
        setUserData(response.data.user);
        setUser(response.data.user);
        navigate("/home");
      }
    } catch (error) {
      console.error("Registration error:", error);
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="bg-cover bg-[url('/istockphoto.jpeg')] h-screen flex flex-col">
      <div className="pt-1 pb-1 px-20 mx-auto">
        <img className="h-50 w-200" src="/Logo.png" alt="MyRide Logo" />
        <form onSubmit={submitHandler}>
          <h3 className="text-xl mb-2">Enter your name</h3>
          <div className="flex">
            <input
              className="bg-[#eeeeee] rounded mr-1 px-2 py-2 border border-black w-full text-lg"
              required
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="bg-[#eeeeee] rounded px-2 py-2 border border-black w-full text-lg"
              required
              type="text"
              placeholder="Surname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className="text-xl mb-2">Enter your email</h3>
          <input
            className="bg-[#eeeeee] rounded px-2 py-2 border border-black w-full text-lg"
            required
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-xl mb-2">Enter your password</h3>
          <input
            className="bg-[#eeeeee] rounded px-2 py-2 border border-black w-full text-lg"
            required
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="mt-4 bg-[#111] text-white font-semibold rounded px-2 py-2 border border-black w-full text-lg">
            Sign Up
          </button>

          <Link to="/UserLogin" className="text-black text-xl mt-2 block">
            Already have an Account?
          </Link>
        </form>
      </div>

      <div className="mx-auto w-full max-w-md">
        <Link
          to="/CaptainSignUp"
          className="flex justify-center bg-[#111] text-white font-semibold rounded px-2 py-2 border border-black w-full text-lg mt-4"
        >
          Sign up as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserSignUp;
