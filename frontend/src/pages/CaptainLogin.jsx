import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CaptainLoginIn = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[CaptainData,setCaptainData]=useState({})
     const submitHandler=()=>
     {  
        setCaptainData(
          {
            email:Email,
            password:password
          }
        )
        setEmail('')
        setPassword('')
      }
  return (
     <div className=" bg-cover  bg-[url(\istockphoto.jpeg)] h-screen flex flex-col ">
        <div className='pt-20 pb-3 pr-20 pl-20 ml-100 mr-100'>
          <img className="h-60 w-200 " src="/Logo.png" alt="MyRide Logo" />
          <form
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
          }}
          >
          <h3 className="text-xl mb-2" >What is your email?</h3>
          <input value={email}  
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#eeeeee] rounded px-2 py-2 border border-black w-full text-lg"   required type="email" placeholder="Enter your Email ?" />
          <h3 className="text-xl mb-2">What is your password?</h3>
          <input value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-[#eeeeee] rounded px-2 py-2 border border-black w-full text-lg"required type="password" placeholder="Enter your password ?" /><br/>
          <br/>
          <button className="bg-[#111] text-white font-semibold rounded px-2 py-2 border border-black w-full text-lg">Login</button><br/>
          <Link to="/CaptainSignUp"className="text-black text-xl">Register as a Captain?</Link>
          </form>
        </div>
        <div className='ml-120 mr-120'>
        <Link to="/UserLogin" className="flex justify-center bg-[#111] text-white font-semibold rounded px-2 py-2 border border-black w-full text-lg ">Sign in as User</Link>
        </div>
        </div>
  )
}

export default CaptainLoginIn