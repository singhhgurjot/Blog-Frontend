import React from 'react'
import Navbar from "./nav"
import "./Home.css";
import Card from "./Card"
import Sidecard from './Sidecard';
import axios from "../../axios";
import { useEffect } from 'react';
import { useState } from 'react';
export default function Home() {
 useEffect(()=>{
axios.post
 },[])
  return (
    <div className="w-screen min-h-screen">
        <Navbar/>
        <div className='flex justify-between'>
        <div className='card'>
            <div className="">
                  <h1 className="font-mainfont text-2xl mt-20 todayspick">Today's Pick</h1>
            
          </div>
          <div className="cards">
          <Card></Card>
          <Card>
          </Card>
          <Card/>
      </div>
        </div>
        <div className=' font-mainfont sidediv flex flex-col'>
        <p className='text-2xl'>Recently Posted</p>
        <div className="mt-10">
        <Sidecard></Sidecard>
          </div>
        </div>
      </div>
    </div>
  )
}
