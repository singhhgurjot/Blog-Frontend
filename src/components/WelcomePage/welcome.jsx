import React, { Suspense } from 'react'
import Navbar from "../BasicNav/nav"
import "./welcome.css"
import {Canvas} from "@react-three/fiber"
import { OrbitControls,useGLTF } from '@react-three/drei'
import {useRef} from "react"
import Model from "../../Scene"
import { useNavigate } from 'react-router-dom'
export default function welcome() {
  const navigate=useNavigate();
  return (
    <div className="w-screen h-screen">
        <Navbar/>
        <div className="flex justify-between">
        <div>
            <p className="font-mainfont font-black text-6xl mt-20 ml-10 ">UNLEASH YOUR THOUGHTS!</p>
        <p className="font-mainfont ml-10 text-6xl font-black diveinto mt-3">dive into scribblesphere </p>
        <div className="descriptionbox">
          <p className="font-mainfont ml-10 text-1xl font-black diveinto mt-3 descriptionbox">Welcome to Scribblesphere, your ultimate platform for sharing your thoughts, ideas, and stories with the world.
          At Scribblesphere, we believe that everyone has a unique perspective to offer, and we provide the perfect canvas for you to unleash your creativity through captivating blogs. Whether you're a seasoned writer, a passionate storyteller, or just someone looking to share their experiences, Scribblesphere is the place for you.
Our intuitive and user-friendly interface allows you to effortlessly craft and publish your blogs. Share your adventures, inspire others with your wisdom, or delve into your favorite topics – the possibilities are endless. </p>
        </div>
        <button className='rounded-full  py-1 px-7 startnow font-mainfont-black bold italic text-2xl ml-10 mt-10' >Start Now!</button>
      </div>
      <div>
          <Canvas style={{ width: '700px', height: '600px' }}>
            {/* The width and height above can be adjusted as needed */}
            <Model />
          </Canvas>
      </div>
      </div>
      
    </div>
  )
}
