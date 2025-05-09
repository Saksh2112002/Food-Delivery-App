import React from 'react'
import '../Css/Contact.css'
import Footer from "./Footer.jsx"
const Contact = () => {
  return (
    <>
    <div id="Contact_background"className="container-xxl col-xl-15 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 mb-3 text-black">Contact Me</h1>
        <p className="col-lg-10 fs-4 text-primary">When you send any message then write there details and click on submit.</p>
        <i className="bi bi-facebook fs-2"style={{color:"black"}}></i>
        <i className="bi bi-twitter fs-2 mx-4"style={{color:"black"}}></i>
        <i className="bi bi-instagram fs-2 mx-1"style={{color:"black"}}></i>
        <i className="bi bi-youtube fs-2 mx-4"style={{color:"black"}}></i>
      </div>
      
      <div className="col-md-10 mx-auto col-lg-4">
        <form className="p-4 p-md-5 border rounded-3 bg-white" opacity="0.8">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingPassword" placeholder="Message"/>
            <label for="floatingMessage">Message</label>
          </div>
          <div className="checkbox mb-3 text-black">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Send </button>
          <hr className="my-4"/>
          <small className="text-black">By clicking Send, when fill the details.</small>
        </form>
      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default Contact