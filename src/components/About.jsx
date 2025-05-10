import React from 'react'
import "../Css/About.css";

// its a abouts

const About = () => {
  return (
    <div id='background_about' className="text-center  px-4 py-5">
  
    <h1 className="display-5 fw-bold text-black">THE BURGER TASTES BETTER WHEN YOU EAT IT WITH YOUR FAMILY</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4 text-black">We have family pack combo burger for customer burger and In our delicious burger menu many cracy burger , spicy burger , cheese burger, bacon burger etc.Please go on menu</p>
      <div className="d-grid d-sm-flex justify-content-sm-center gap-2">
    
        <button type="button" className=" About btn btn-lg btn-outline-warning px-4"><a href="/Our_Menu">EXPLORE FULL MENU</a></button>
      </div>
    </div>
  </div>
  )
}

export default About