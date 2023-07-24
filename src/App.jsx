import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../src/components/WelcomePage/welcome"
function App() {


  return (
    <Routes>
      <Route path="/" Component={Welcome}/>
    </Routes>
  )
}

export default App
