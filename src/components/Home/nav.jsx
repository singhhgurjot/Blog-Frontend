import React from 'react';
import './nav.css';
import { useNavigate } from 'react-router-dom';
import { toast,Toaster } from 'react-hot-toast';
import axios from "../../axios";
import { useEffect } from 'react';
import { useState } from 'react';
export default function Nav() {
    const navigate = useNavigate();
    const [name, setName] = useState();
    useEffect(() => {
        axios().get("/home").then((res) => {
            setName(res.data.name);
        }).catch ((err) => {
            toast(err.response.data.message);
        })
    }, [])

    return (
        <div className="flex justify-between nav items-center w-screen">
            <div>
                <p className="text-white ml-20 font-mainfont text-2xl italic">ScribbleSphere</p>
            </div>
            <div className="flex items-center">
                <a className="text-white mr-20 font-mainfont text-2xl" href="" onClick={(e)=>{
                    e.preventDefault();

                    
                    toast("Logged Out Successfully");
                        localStorage.removeItem("token");
                    setTimeout(()=>{
                       navigate("/login");
                    },2000)
                    
                }}>Logout</a>
                <button className='rounded-full  py-1 px-7 getstarted font-mainfont-black bold italic mr-10 text-2xl' onClick={() => {
                    navigate("/register");
                }}>{name}</button>

            </div>
            <Toaster/>
        </div>

    );
}
