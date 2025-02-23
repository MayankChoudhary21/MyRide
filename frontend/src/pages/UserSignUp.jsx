import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userData, setUserData] = useState("");
  const submitHandler = (e) => {
    setEmail("");
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setPassword("");
    setfirstName("");
    setlastName("");
  };

  return (
    <div className=" bg-cover  bg-[url(\istockphoto.jpeg)] h-screen flex flex-col ">
      <div className="pt-1 pb-1 pr-20 pl-20 ml-100 mr-100">
        <img className="h-50 w-200 " src="/Logo.png" alt="MyRide Logo" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <h3 className="text-xl mb-2">Enter your name </h3>
          <div className="flex">
            <input
              className="bg-[#eeeeee] rounded mr-1 px-2 py-2 border border-black w-full text-lg"
              required
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            />
            <br />
            <br />

            <input
              className="bg-[#eeeeee] rounded px-2 py-2 border border-black w-full text-lg"
              required
              type="text"
              placeholder="Surname "
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
            />
          </div>

          <h3 className="text-xl mb-2">Enter your email </h3>
          <input
            className="bg-[#eeeeee] rounded px-2 py-2 border border-black w-full text-lg"
            required
            type="email"
            placeholder="Enter your Email ?"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="text-xl mb-2">Enter your password</h3>
          <input
            className="bg-[#eeeeee] rounded px-2 py-2 border border-black w-full text-lg"
            required
            type="password"
            placeholder="Enter your password ?"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <button className="bg-[#111] text-white font-semibold rounded px-2 py-2 border border-black w-full text-lg">
            Login
          </button>
          <br />
          <Link to="/UserLogin" className="text-black text-xl">
            Already have a Account?
          </Link>
        </form>
      </div>
      <div className="ml-120 mr-120">
        <Link
          to="/CaptainSignUp"
          className="flex justify-center bg-[#111] text-white font-semibold rounded px-2 py-2 border border-black w-full text-lg "
        >
          Sign up as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserSignUp;
