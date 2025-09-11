import React from 'react'
import { useNavigate } from 'react-router-dom'
import Image from "../assets/naruto/id-134494.jpg"
import Image5 from "../assets/naruto/id-134496.jpg"
import Image7 from "../assets/naruto/id-116734.jpg"
import Image6 from "../assets/naruto/id-134493.jpg"
import Image1 from "../assets/naruto/id-134496.jpg"
import Image2 from "../assets/naruto/id-n-134487.jpg"
import Image8 from "../assets/naruto/id-n-142503.jpg"
import Image3 from "../assets/naruto/id-n-134485.jpg"
import Image4 from "../assets/naruto/id-n-134484.jpg"

function Tokyoghoul() {
  
  return (

    <div className="head">
      <div className="head1">
      <div className="heleft bg-white">
      {/* <h1> */}
      {/* <i className="bi bi-arrow-left-circle-fill" role="button" onClick={()=>{Navgate("/Genres")}}></i>Papular </h1> */}
      </div>
      <div className="death">
      <h1 >Tokyo Ghoul</h1>
      </div>
      </div>

    <div className='container'>
      <div className="card">
      <img src={Image} alt="images" />
      </div>
      <div className="card">
      <img src={Image1} alt="images" />
      </div>
      <div className="card">
      <img src={Image2} alt="images" />
      </div>
      <div className="card">
      <img src={Image3} alt="images" />
      </div>
      <div className="card">
      <img src={Image4} alt="images" />
      </div>
      <div className="card">
      <img src={Image5} alt="images" />
      </div>
      <div className="card">
      <img src={Image6} alt="images" />
      </div>
      <div className="card">
      <img src={Image7} alt="images" />
      </div>
      <div className="card">
      <img src={Image8} alt="images" />
      </div>
    </div>
    </div>
  )
}

export default Tokyoghoul
