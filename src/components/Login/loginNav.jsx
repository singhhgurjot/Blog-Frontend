import React from 'react';
import './nav.css';
import { useNavigate } from 'react-router-dom';


export default function Nav() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between nav items-center w-screen">
            <div>
                <p className="text-white ml-20 font-mainfont text-2xl italic">ScribbleSphere</p>
            </div>
            <div className="flex items-center">
                <a className="text-white mr-20 font-mainfont text-2xl" href="" onClick={() => {
                    navigate("/register");
                }} >Register</a>


            </div>
        </div>
    );
}
