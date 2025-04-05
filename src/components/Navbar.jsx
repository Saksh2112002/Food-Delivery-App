import React from 'react'
import { NavLink } from 'react-router-dom';
import Profile from "./Profile";
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import logo from '../assets/logo/logo.jpg'

import '../Css/Navbar.css'


export default function Navbar() {

  const {user,toggleTheme , theme} = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
     <img src={logo} width="5%" height="auto"></img>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
          <li className="nav-item mx-2">
            <NavLink to="/" className="nav-link active text-black" aria-current="page">HOME</NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink to="/AboutUs" className="nav-link text-black">ABOUTUS</NavLink>
          </li>
          <li className="nav-item mx-2">
          <NavLink to="/Our_Menu" className="nav-link text-black">OURMENU</NavLink>
          </li>
          <li className="nav-item mx-2">
          <NavLink to="/Shop" className="nav-link text-black">SHOP</NavLink>
          </li>
          <li className="nav-item mx-2">
          <NavLink to="/Contact" className="nav-link text-black">CONTACT</NavLink>
          </li>
        </ul>
        <div className="text-end">
          {user && user.un.trim() ? (
            <div className="d-flex gap-4 text-black">
              <span>Welcome {user.un}</span>
              <Profile/>
            </div>
          ) : (
            <NavLink
            type="button"
            className="btn btn-outline-primary me-2"
            to="/login"
            >
              Sign-Up
            </NavLink>
          )}
        </div>
        <div className="form-check form-switch">
          <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={toggleTheme}
          />
          <label className="form-check-label text-black" for="flexSwitchCheckDefault">
             {theme ==="light" ? " Dark Mode" : "Light Mode"}
          </label>
        </div>
      </div>
    </div>
  </nav>
  )
}
