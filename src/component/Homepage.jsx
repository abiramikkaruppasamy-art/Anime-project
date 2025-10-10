import React from 'react';
import Home from '../assets/anime-back1.jpg';
import { useNavigate } from 'react-router-dom';
import Dark from './Dark';
import Fantasy from './Fantasy';
import Papular from './Papular';
import Romance from './Romance';

function Homepage() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#000', color: '#fff' }}>
      {/* Hero Section */}
      <div className="position-relative text-center text-light" style={{ width: '100%', height: '90vh', overflow: 'hidden' }}>
        <img
          src={Home}
          alt="home"
          className="w-100 h-100"
          style={{ objectFit: 'cover', filter: 'brightness(70%)' }}
        />
        <div className="position-absolute top-50 start-50 translate-middle px-3">
          <h1 className='text' style={{ fontSize: 'langer', color: '#FFD700', fontWeight: 'bold', marginBottom: '1rem' }}>
            All your anime in one place. Start watching now!
          </h1>
          <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
            Watch more
            <i
              className="bi bi-arrow-right-circle-fill ms-2"
              role="button"
              style={{ cursor: 'pointer', color: '#FFD700', transition: 'transform 0.3s ease' }}
              onClick={() => navigate('/Genres')}
              onMouseOver={(e) => (e.target.style.transform = 'scale(1.2)')}
              onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            ></i>
          </h2>
        </div>
      </div>

      {/* Anime Sections */}
      <div className="container-fluid px-3 px-md-5 mt-4">
        <Papular />
        <hr className="text-light" />
        <Romance />
        <hr className="text-light" />
        <Dark />
        <hr className="text-light" />
        <Fantasy />
      </div>
    </div>
  );
}

export default Homepage;
