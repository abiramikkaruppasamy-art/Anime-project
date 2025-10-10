import React from 'react'
import { useNavigate } from 'react-router-dom';
import Img1 from '../assets/bleach/7499.jpg';
import Img7 from '../assets/naruto/id-134494.jpg'
import Img2 from '../assets/bleach/64689.jpg';
import Img3 from '../assets/bleach/id-147774.jpg';
import Img5 from '../assets/naruto/id-116734.jpg'
import Img4 from '../assets/bleach/id-135431.jpg';
import Img6 from '../assets/naruto/id-n-134485.jpg'

function Romance() {
  const Navgate = useNavigate();
  return (
    <div className='section-body'>
        <h1> Romance </h1>
        <div >
            <img src={Img1}className='pimg' alt=""/>
            <img src={Img2}className='pimg' alt=""/>
            <img src={Img3}className='pimg' alt=""/>
            <img src={Img7}className='pimg' alt=""/>
            <img src={Img5}className='pimg' alt=""/>
            <img src={Img6}className='pimg' alt=""/>
            {/* <img src={Img4}className='pimg' alt=""/> */}
           <i className="wi bi-arrow-right-circle-fill"  role="button" onClick={()=>{Navgate("/romanceanime")}}></i>
     
         
        </div>

    </div>
  )
}

export default Romance