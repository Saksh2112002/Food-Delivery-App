import React from 'react'
import { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
// import './App.css'
import Login from '../src/components/Login';

import ProfilePage from '../src/components/ProfilePage'
import AboutUs from '../src/components/AboutUs'
import Home from '../src/components/Home'

import Our_Menu from '../src/components/Our_Menu'
import Shop from '../src/components/Shop'
import Blog from '../src/components/Blog'
import Contact from '../src/components/Contact'
import { Toaster } from "react-hot-toast"
import UserProvider from "./context/UserContext";


function App() {
  
 return (
   <UserProvider>
    <BrowserRouter>
    <Toaster
    position="top-right"
    reverseOrder={false}
    toastOptions={{
      duration: 2000,
      style: {
        backgroundColor : "#333",
        color: "#FFF",
      },
    }}
    />

    <Navbar/>
    
       
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Our_Menu" element={<Our_Menu/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/Contact" element={<Contact/>}/> 
      <Route path="/login" element={<Login />}/>
      <Route path="/profilePage" element={<ProfilePage />}/>
      </Routes>
    </BrowserRouter>
    </UserProvider>
      
   
       
  );
};

export default App
