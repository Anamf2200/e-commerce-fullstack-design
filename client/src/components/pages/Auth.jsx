import React, { useState } from "react";
import { useAddUserMutation,useLoginMutation } from "../../auth/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../slices/auth-slice";
import {useNavigate} from 'react-router-dom'
const AuthPage = () => {
  const navigate= useNavigate()
const dispatch= useDispatch()
    const [addUser,{isLoading:signupLoading}]=useAddUserMutation()
    const [loginUser,{isLoading:loginLoading}]=useLoginMutation()
    const [signUpData, setsignUpData] = useState({name:'',email:'',password:''})
    const [loginData, setloginData] = useState({email:'',password:''})

    const signUpUser=async (e)=>{
e.preventDefault()
try{
    await addUser({ 
        name: signUpData.name,
    email: signUpData.email,
    password: signUpData.password}).unwrap()
    alert("User registered successfully")
    setsignUpData({name:"",email:'',password:""})
}
catch(err){
    console.error(err)
    alert(err.data?.message|'Signup failed')
}
    }

    const handleLogin=async(e)=>{
        e.preventDefault()
        try{
            const res= await loginUser(loginData).unwrap()
            dispatch(setCredentials({token:res.access_token,user:res.user}))
            alert("Login successfull")
               if (res.user.role === "admin") {
        navigate("/adminPanel"); // Admin Panel
      } else {
        navigate("/home");
        }
            setloginData({email:'',password:''})
            
        }
        catch(err){
    console.error(err)
    alert(err.data?.message|'Signup failed')
}
    }
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4 gap-8">
      
      {/* Sign Up Form */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form className="space-y-4"onSubmit={signUpUser}>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={signUpData.name}
              onChange={(e)=>setsignUpData({...signUpData,name:e.target.value})}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={signUpData.email}
              onChange={(e)=>setsignUpData({...signUpData,email:e.target.value})}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={signUpData.password}
              onChange={(e)=>setsignUpData({...signUpData,password:e.target.value})}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
        
            className="w-full bg-green-500 text-white font-medium py-2 rounded hover:bg-green-600 transition"
          >
                        {signupLoading ? "Signing Up..." : "Sign Up"}

        
          </button>
        </form>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={(e)=>setloginData({...loginData,email:e.target.value})}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={(e)=>setloginData({...loginData,password:e.target.value})}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600 transition"
          >
  {loginLoading ? "Logging In..." : "Login In"}

            
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-green-500 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
