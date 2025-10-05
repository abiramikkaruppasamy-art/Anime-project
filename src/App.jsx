import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Bleach from './component/Bleach';
import Clannad from './component/Clannad';
import Dark from './component/Dark';
import Darkanime from './component/Darkanime';
import Deathnode from './component/Deathnode';
import FairyTail from './component/FairyTail';
import Fantasy from './component/Fantasy';
import Fantasyanime from './component/Fantasyanime';
import Footer from './component/Footer';
import Gate from './component/Gate';
import Genres from './component/Genres';
import Navbar from './component/Navbar';
import Homepage from './component/Homepage';
import Hornimiya from './component/Hornimiya';
import Konosuda from './component/Konosuda';
import Monster from './component/Monster';
import Naruto from './component/Naruto';
import Papular from './component/Papular';
import Papularanime from './component/Papularanime';
import Romance from './component/Romance';
import Romanceanime from './component/Romanceanime';
import Swordart from './component/Swordart';
import Tokyoghoul from './component/Tokyoghoul';
import Toradora from './component/Toradora';
import About from './component/About';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {
  return (
    <div>
      <Navbar/>
      {/* <Header/> */}
     
      
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/papularanime" element={<Papularanime/>} />
      <Route path="/romanceanime" element={<Romanceanime/>} />
      <Route path="/darkanime" element={<Darkanime/>} />
      <Route path="/fantasyanime" element={<Fantasyanime/>} />
      
      <Route path="/papular" element={<Papular/>} />
      <Route path="/romance" element={<Romance/>} />
      <Route path="/dark" element={<Dark/>} />
      <Route path="/fantasy" element={<Fantasy/>} />
      <Route path="/genres" element={<Genres/>} />

      <Route path="/naruto" element={<Naruto/>} />
      <Route path="/deathnode" element={<Deathnode/>} />
      <Route path="/gate" element={<Gate/>} />
      <Route path="/horimiya" element={<Hornimiya/>} />
      <Route path="/fairytail" element={<FairyTail/>} />
      <Route path="/tokyoghoul" element={<Tokyoghoul/>} />
      <Route path="/konosuda" element={<Konosuda/>} />
      <Route path="/monster" element={<Monster/>} />
      <Route path="/clannad" element={<Clannad/>} />
      <Route path="/bleach" element={<Bleach/>} />
      <Route path="/toradora" element={<Toradora/>} />
      <Route path="/swordart" element={<Swordart/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
