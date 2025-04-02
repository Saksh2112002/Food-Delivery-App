import React from 'react'
import '../Css/BurgerDelivery.css'

const BurgerDelivery = () => {
  return (
    <div id='background_burgerdelivery'className="px-4 py-5 pb-5 text-center bg-gray opacity-0.8">
     <h4 className="display-7 text-black">WE GUARANTEE</h4>
    <h1 className="display-5 fw-bold text-black">30 MINUTES DELIVERY</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4 text-black">We Guaratee that your food delivery are rech in 30 minutes and while the food is not at time that we give food half payment will be pay by us. </p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button"className="btn btn-primary btn-lg px-4 gap-3">Call : 999-888-777</button>
        
      </div>
    </div>
  </div>
  )
}

export default BurgerDelivery