import React from 'react'
import Navbar from './registerNav'
import "./register.css"
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Model from "../../register3D"
export default function register() {
  return (
    <div className=" flex flex-col h-screen w-screen justify-center">
      <Navbar/>
      <div className="flex h-screen items-center justify-between mr-20 flex-div">
       

        <div className="w-full max-w-md form-con formm">
          <form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
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
              />

            </div>
            <div className="flex items-center justify-between">
              <button
                className=" text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
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
      
      
    </div>
  )
}
