import React from 'react'
import Home from '../assets/anime-back1.jpg'
import { useNavigate } from 'react-router-dom'
import Dark from './Dark'
import Fantasy from './Fantasy'
import Papular from './Papular'
import Romance from './Romance'


function Homepage() {
  const Navgate = useNavigate();
  return (
    <div>
      
      <h1 className='text'>All  your anime in one place.
        start whatching now!</h1>
      <h1 className='text1'>Whatch more 
      <i className="bi bi-arrow-right-circle-fill" role="button" onClick={()=>{Navgate("/Genres")}}></i>
       </h1>
      <img src={Home} alt="home"  height={700} width={1680} className="homepage"/>
      <Papular/>
      <li><hr className="dropdown-divider" /></li>
      <Romance/>
      <Dark/>
      <li><hr className="dropdown-divider" /></li>
      <Fantasy/>
    </div>
  )
}

export default Homepage
