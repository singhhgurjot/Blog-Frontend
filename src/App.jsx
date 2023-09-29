import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../src/components/WelcomePage/welcome";
import Register from "./components/Register/register";
import Login from  "./components/Login/login";
import Home from "./components/Home/Home";
function App() {


  return (
    <Routes>
      <Route path="/" Component={Welcome}/>
      <Route path="/register" Component={Register}/>
      <Route path="/login" Component={Login}></Route>
      <Route path="/home" Component={Home}></Route>
    </Routes>
  )
}

export default App
