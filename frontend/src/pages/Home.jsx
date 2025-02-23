import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative">
      <div className="relative bg-cover  bg-[url(\iStock-car-sharing.jpeg)] h-screen pt-5 pl-5 pr-5 flex justify-between flex-col w-full bg-gray-200">
        <img className="h-30 w-60" src="/Logo.png" alt="MyRide Logo" />
      </div>

      <div className="w-full  bg-white py-2 px-5 border-2 border-black text-center">
        <h2 className="text-xl font-bold text-black-800">
          Get Started with MyRide
        </h2>
        <Link
          to="/UserLogin"
          className="inline-block w-full bg-black text-white py-3 rounded mt-2"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
