import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {toast} from "react-hot-toast"
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext)
    const [formData, setFormData] = useState({
        un: "",
        em: "",
    });

    function handleChange(e){
    const { name, value } = e.target;
    setFormData((preVal) => ({
        ...preVal,
        [name]: value,
    }));
    }
 
    function handleSubmit(e){
      e.preventDefault();
      if (formData.un.trim()  && formData.em.trim()){
        setUser(formData);

        toast.success("Login Successfully");

        setTimeout(() =>{
            toast.success(`Welcome ${formData.un}`,{
                icon:'🙌'
            })
        }, 1000);

        setFormData({
            un:"",
            em:"",
        });

        setTimeout(() => {
            navigate("/");
        }, 2000);
      }
      else{
        toast.error("Enter Credentials")
      }
    }
  return (
     <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 fs-1 text-body-emphasis mb-3 pb-5">WELCOME,Delicious Burger Sign-Up Form</h1>
          <p className="col-lg-10 fs-4 pb-4">Please,write the details and login it.</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
          onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input 
              type="name" 
              className="form-control" 
              id="floatingUsername"
              placeholder="Name"
              onChange={handleChange}
              name="un"
              />
              <label for="floatingUsername">UserName</label>
            </div>
            <div className="form-floating mb-3">
              <input 
              type="email"
              className="form-control"
              onChange={handleChange}
              id="floatingPassword"
              placeholder="sakshiy@2019gmail.com"
              name="em"
              />
              <label for="floatingPassword">Email Address</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            <button onClick={handleSubmit} type="button" className="btn btn-outline-secondary btn-lg px-4">Sign out</button>
            <hr className="my-4"/>
            <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
          </form>
        </div>
      </div>
    </div>
  
   
  )
}

export default Login