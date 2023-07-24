import React from 'react';
import './nav.css';

export default function Nav() {
  return (
    <div className="flex justify-between nav items-center w-screen">
      <div>
        <p className="text-white ml-20 font-mainfont text-2xl italic">ScribbleSphere</p>
      </div>
      <div className="flex items-center">
        <p className="text-white mr-20 font-mainfont text-2xl">Login</p>
          <button className='rounded-full  py-1 px-7 getstarted font-mainfont-black bold italic mr-10 text-2xl'>Get Started!</button>

      </div>
    </div>
  );
}
