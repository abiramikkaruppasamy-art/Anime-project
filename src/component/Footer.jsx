import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const Navgate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed email:', email);
    setEmail('');
  };

  return (
    <div className="container-fluid-bg mt-5">
      <footer className="footer text-center py-5">

        <h2 className="text-light mb-4">AnimeZone</h2>

        <ul className="nav justify-content-center mb-4 flex-wrap">
          <li className="nav-item">
            <a className="nav-link text-dark" role="button" onClick={()=>{Navgate("/")}}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" role="button" onClick={()=>{Navgate("/Genres")}}>Genres</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" role="button" onClick={()=>{Navgate("/papular")}}>Papular</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" role="button" onClick={()=>{Navgate("/romance")}}>Romanse</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" role="button" onClick={()=>{Navgate("/dark")}}>Dark</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" role="button" onClick={()=>{Navgate("/fantasy")}}>Fantasy</a>
          </li>
        </ul>

        <div className="social-icons mb-4">
          <ul className="list-unstyled d-flex justify-content-center gap-4">
            <li>
              <a href="#"><i className="bi bi-youtube text-danger fs-3"></i></a>
            </li>
            <li>
              <a href="#"><i className="bi bi-telegram text-info fs-3"></i></a>
            </li>
            <li>
              <a href="#"><i className="bi bi-google-play text-success fs-3"></i></a>
            </li>
            <li>
              <a href="#"><i className="bi bi-browser-chrome text-primary fs-3"></i></a>
            </li>
            <li>
              <a href="#"><i className="bi bi-pinterest text-danger fs-3"></i></a>
            </li>
            <li>
              <a href="#"><i className="bi bi-twitter text-info fs-3"></i></a>
            </li>
          </ul>
        </div>

        <div className="subscribe-form mx-auto mb-4" style={{ maxWidth: '500px' }}>
          <form onSubmit={handleSubscribe}>
            <h5 className="mb-3">Subscribe to our newsletter</h5>
            <p className="text-muted mb-3">
              Monthly digest of what's new and exciting from us.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
        <div className="text-muted">&copy; 2025 AnimeZone. All Rights Reserved.</div>
      </footer>
    </div>
  );
}

export default Footer;
