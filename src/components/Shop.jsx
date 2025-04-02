import React from 'react'
import '../Css/Shop.css'
import Footer from "./Footer.jsx"
const Shop = () => {
  return (
    <>
    <main id='background_shop'className="container-xxl">
  <div className="p-4 p-md-5 mb-4 text-white rounded ">
    <div className="col-md-6 px-0">
     
      <p className="lead my-3 text-black fw-bolder mx-5" style={{fontSize:"100px",fontFamily:"Brush Script MT",}}>SHOP</p>
 
    </div>
    
  </div>
  



 
</main>
<div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Store Location</th>
              <th scope="col">Store City</th>
              <th scope="col">Address</th>
              <th scope="col">Contact no.</th>
              <th scope="col">Google Location Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Janakpuri</td>
              <td>New Delhi</td>
              <td>Gali Number 8 A2B block, Vardhman janak market, 
                near Service Road, Janakpuri, New Delhi, Delhi 110058</td>
              <td>7324892736</td>
             <td><a href="https://www.google.com/maps/@19.4117632,72.8236032,5248m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">Click For Location</a></td>
            </tr>
            <tr>
              <td>Golf Course Road</td>
              <td>Gurugram</td>
              <td>Shop no-9, Central Plaza, Golf Course Rd, Parsvnath Exotica,
                 Wazirabad, Sector 53, Gurugram, Haryana 122002</td>
              <td>8736736875</td>
              <td><a href="https://www.google.com/maps/@19.4117632,72.8236032,5248m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">Click For Location</a></td>
            </tr>
            <tr>
              <td>Boring Road</td>
              <td>Patna</td>
              <td>SK 8, SECTOR K, Malahi Pakri, CHOWK, Kankarbagh,
                 Patna, Bihar 800020</td>
              <td>7367687638</td>
              <td><a href="https://www.google.com/maps/@19.4117632,72.8236032,5248m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">Click For Location</a></td>
            </tr>
            <tr>
              <td>Harmu Rachi</td>
              <td>Rachi</td>
              <td>Sunita Complex, Shop No. 6, 1st Floor,
                 Harmu Rd, Ranchi, Jharkhand 834001</td>
              <td>7263827687</td>
              <td><a href="https://www.google.com/maps/@19.4117632,72.8236032,5248m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">Click For Location</a></td>
            </tr>
            <tr>
              <td>Bhopal</td>
              <td>Bhopal</td>
              <td>Shop No 8-9 , Town’s Delight, Infront of, near Aura Mall,
                 Gulmohar Colony, Bhopal, Madhya Pradesh 462039</td>
              <td>7263762187</td>
              <td><a href="https://www.google.com/maps/@19.4117632,72.8236032,5248m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">Click For Location</a></td>
            </tr>
            <tr>
              <td>Jaipur</td>
              <td>Jaipur</td>
              <td>G 10/11, Alankar Plaza, Central Spine 3,
                 Sector 2, Vidyadhar Nagar, Jaipur- 302039</td>
              <td>7826472323</td>
              <td><a href="https://www.google.com/maps/@19.4117632,72.8236032,5248m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">Click For Location</a></td>
            </tr>
            <tr>
              <td>Kemp Fort Mall</td>
              <td>Bangalore</td>
              <td>Kemp Fort Mall, 98, HAL Old Airport Rd, Ramagiri, Murgesh Pallya,
                 Bengaluru, Karnataka 560017</td>
              <td>3747673268</td>
              <td><a href="https://www.google.com/maps/@19.4117632,72.8236032,5248m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">Click For Location</a></td>
            </tr>
            <tr>
              <td>Bhubaneshwar</td>
              <td>Bhubaneshwar</td>
              <td> 24, KIIT Road, HIG Duplex Flats, Bajrang Vihar,
                 Patia, Bhubaneswar, Odisha 751024</td>
              <td>8278842338</td>
              <td><a href="https://www.google.com/maps/@19.4117632,72.8236032,5248m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">Click For Location</a></td>
            </tr>
            <tr>
              <td>Dehradun</td>
              <td>Dehradun</td>
              <td>65-D(New Municipal No. 357/2, Rajpur Rd,
                Dehradun, Uttarakhand 248001)</td>
              <td>2813893789</td>
              <td><a href="https://www.google.com/maps/@19.4117632,72.8236032,5248m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">Click For Location</a></td>
            </tr>
            <tr>
              <td>Mumbai</td>
              <td>Mumbai</td>
              <td>Lakdawala House, Swami Vivekananda Rd, opp. McDonald’s, Malad, Chincholi Phatak, Malad East,<br></br>
                 Mumbai, Maharashtra 400064</td>
              <td>8943812481</td>
              <td><a href="https://www.google.com/maps/@19.4117632,72.8236032,5248m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">Click For Location</a></td>
            </tr>
            <tr>
              <td>Guwahati</td>
              <td>Guwahati</td>
              <td>Central Mall, Christian Basti 6, Guwahati, Assam 781005</td>
              <td>9283478233</td>
              <td><a href="https://www.google.com/maps/@19.4117632,72.8236032,5248m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">Click For Location</a></td>
            </tr>
            <tr>
              <td>Washvillage</td>
              <td>Kondotty</td>
              <td>Muncipality Near Wash, Room no :38/76B, LLP Bypass Road Kondotty,
                 Village, Kondotty, Kerala 673638</td>
              <td>8763763764</td>
              <td><a href="https://www.google.com/maps/@19.4117632,72.8236032,5248m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">Click For Location</a></td>
            </tr>
            <tr>
              <td>Pakwan chowk</td>
              <td>Ahmedabad</td>
              <td>Prime Plaza, First Floor, Shop No 11,12, Bodakdev, Ahmedabad, Gujarat 380054</td>
              <td>7263762778</td>
              <td><a href="https://www.google.com/maps/@19.4117632,72.8236032,5248m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">Click For Location</a></td>
            </tr>
            <tr>
              <td>CP</td>
              <td>New Delhi</td>
              <td>23 , Ground Floor A, A, Radial Rd 7, Connaught Place, New Delhi, Delhi 110001</td>
              <td>8273872481</td>
              <td><a href="https://www.google.com/maps/@19.4117632,72.8236032,5248m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">Click For Location</a></td>
            </tr>
            <tr>
              <td>Guwahati</td>
              <td>City Center Mall<br></br> Guwahati</td>
              <td>Flavour The Food Court, FC No. - 04, City Center Mall, GS Road,
                 Guwahati, Kamrup Metropolitan Dist, Assam-781005</td>
              <td>7382472948</td>
              <td><a href="https://www.google.com/maps/@19.4117632,72.8236032,5248m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">Click For Location</a></td>
            </tr>
            <tr>
              <td>Raipur</td>
              <td>Airport Kiosk<br></br> Raipur</td>
              <td>Opposite AIIMS Gate No 5 ,Tatiband ,Raipur, Chattisgarh - 492099</td>
              <td>7836265366</td>
              <td><a href="https://www.google.com/maps/@19.4117632,72.8236032,5248m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">Click For Location</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer/>
      </>
  )
}

export default Shop