import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "react-router-dom"
import Home from "./Components/Home";
import Dest from './Components/Dest';
import AboutUs from './Components/AboutUs';
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Layout from "./Components/Layout";

function App(){
  return(
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Destination" element={<Dest/>}></Route>
        <Route path="/AboutUs" element={<AboutUs/>}></Route>
        <Route path="/Login" elements={<Login/>}></Route>
        <Route path="/Register" elements={<Register/>}></Route> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App