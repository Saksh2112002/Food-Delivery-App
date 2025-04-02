import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Profile = () => {
  const {logout} = useContext(UserContext)
  const navigate = useNavigate();
  function signOut() {
    logout();
    navigate("/")
    toast.success("Logout SuccessFully")
  }
  return (
    <div className="dropdown text-end">
    <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle show" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
    </a>
    <ul className="dropdown-menu text-small show w-50" aria-labelledby="dropdownUser1" data-popper-placement="top-start">
     
      <li><NavLink className="dropdown-item" to="/ProfilePage">Profile</NavLink></li>
      <li><hr className="dropdown-divider"/></li>
      <li><a  onClick={signOut}  className="dropdown-item" href="#">Sign out</a></li>
    </ul>
  </div>
      
  )
}

export default Profile