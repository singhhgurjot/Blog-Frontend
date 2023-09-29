import React from 'react'
import Navbar from './loginNav'
import "./login.css"
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Model from "../../register3D"
import {useState} from "react"
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
export default function register() {
    const navigate=useNavigate();
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        const reqBody={
            username:username,
            password:password
        }
        axios.post("http://localhost:8080/api/user/login",reqBody).then((res)=>{
            toast(res.data.message);
            localStorage.setItem("token",res.data.token);
            setTimeout(()=>{navigate("/home")},2000)
            
            
        }).catch((err)=>{
            if(err){
               
                toast(err.response.data.message);
            }
        })
    }
    return (
        <div className=" flex flex-col h-screen w-screen justify-center">
            <Navbar />
            <div className="flex h-screen items-center justify-between mr-20 flex-div">


                <div className="w-full max-w-md form-con formm">
                    <form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                        <h1 className="font-mainfont text-bold text-xl mb-9">Login Into Your Account</h1>
                        

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="username"
                            >
                                Username
                            </label>
                            <input
                                className=  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Username"
                                onChange={(e)=>{
                                    setUsername(e.target.value)
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
                                    setPassword(e.target.value)
                                }}
                            />
                        </div>
                       
                        <div className="flex items-center justify-between">
                            <button
                                className=" text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Login
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

<Toaster/>
        </div>
    )
}
