import React from 'react'
import Navbar from './registerNav'
import "./register.css"
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Model from "../../register3D"
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import {useState} from "react"
import { useNavigate } from 'react-router-dom'
export default function register() {
  const [name,setName]=useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirmPassword] = useState("");
  const navigate=useNavigate();

  const formSubmit=(e)=>{
    e.preventDefault();
    const reqBody = {
      name: name,
      username: username,
      password: password,
      password_confirmation: confirm,
      tc: true
    }
    axios.post("http://localhost:8080/api/user/register", reqBody)
      .then((res) => {
        toast(res.data.message);
        if (res.data.success == true) {
          setTimeout(() => {
            navigate("/login")

          }, 3000)
        }
      })
      .catch((err) => {
        toast(err.response.data.message);
      });
  }
  return (
    <div className=" flex flex-col h-screen w-screen justify-center">
      <Navbar/>
      <div className="flex h-screen items-center justify-between mr-20 flex-div">
       

        <div className="w-full max-w-md form-con formm">
          <form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4" onSubmit={formSubmit}>
            <h1 className="font-mainfont text-bold text-xl">Create an Account for Free</h1>
            <h1 className="font-mainfont mb-5 ">start scribbling now!</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Name"
                type="text"
                placeholder="Name"
                onChange={(e)=>{
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmpassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmpassword"
                type="password"
                placeholder="******************"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />

            </div>
            <div className="flex items-center justify-between">
              <button
                className=" text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
             
            </div>
          </form>
          
        </div>
        <div>
        </div>
        <div className="canvas-container "> 

          <Canvas>
            <Model></Model>
          </Canvas>
        </div>
        

      </div>
      
      <Toaster />
    </div>
  )
}
