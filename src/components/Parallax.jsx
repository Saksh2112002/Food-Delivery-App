import React from 'react'
import '../Css/Parallax.css'
import burger_eating_images from '../assets/Parallax/burger_eating_images.jpg'
import friends_eating_burger from '../assets/Parallax/burger_in_plate.jpg'
import people_eating_burger from '../assets/Parallax/people_eating_burger.jpg'
import discount_burger from '../assets/Parallax/discountadds_burger.png'
import App_Apple from '../assets/Parallax/Download_on_the_App_Store_Badge.png'
import Google from '../assets/Parallax/Google_Play_Store_badge_EN.png'

const Parallax = () => {
  return (
    <>
  <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={burger_eating_images} className="box d-block mx-lg-auto img-fluid border border-5" alt="Bootstrap Themes" width="363" height="363" loading="lazy"/>
        <img src={friends_eating_burger} className="boxbox d-block mx-lg-auto img-fluid border border-5" alt="Bootstrap Themes" width="260" height="260" loading="lazy"/>
        <img src={people_eating_burger} className="bigbox box3 d-block mx-lg-auto img-fluid border border-5" alt="Bootstrap Themes" width="200" height="200" loading="lazy"/>
        
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3 text-info">NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD BURGER</h1>
        <p className="lead text-secondary">It's 'bun'-tastic! This burger is pure deliciousness.
          " "Let's 'ketchup' and have a burger party!" "I'm 'beef-ing' up my happiness with 
          this burger." "Having a 'flippin' fantastic time with this burger creation." 
          "No 'patty' can resist the allure of a good burger." "Burgers: the 'meaty' 
          answer to all your hunger pangs." "Burger lovers unite!
  
</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        </div>
      </div>
    </div>
  </div>
  <div id='background_parallex' className="bg-dark text-secondary px-4 py-5 text-center height=400">
  
  </div>
  
  <div id='background_dark' className="container-fluid col-xxl-8 px-8 py-5" width="100%">
    <div className="row flex-lg-row-reverse align-items-center">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={discount_burger} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h2 className="down mx-4">DOWNLOAD MOBILE APP AND</h2>
        <h1 className="SAVE display-5 fw-bold lh-1 mb-3 mx-4">SAVE UP TO 20% </h1>
        <p className="lead mx-4"> If you like an affordable burger&pizza or an order of delicious Crazy burger and fries, download the delicious burger app. Not only can you skip the register by ordering ahead, but you’ll see ALL the best offers of the day displayed on the app!

</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <img src={App_Apple} className="btn-lg px-4 mx-4" width="50%" height="80px"></img>
          <img src={Google} className="btn-lg px-4" width="50%" height="80px"></img>
        </div>
      </div>
    </div>
  </div>
  
  
  </>
  )
}

export default Parallax