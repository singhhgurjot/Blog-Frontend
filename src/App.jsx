import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../src/components/WelcomePage/welcome";
import Register from "./components/Register/register";
function App() {


  return (
    <Routes>
      <Route path="/" Component={Welcome}/>
      <Route path="/register" Component={Register}/>
    </Routes>
  )
}

export default App
