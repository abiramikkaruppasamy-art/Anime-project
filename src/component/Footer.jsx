import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed email:', email);
    // Add your API call or other logic here
    setEmail(''); 
  };

  return (
    <div className="contain">
      <footer className="py-5">
        <div className="row">
         
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">Features</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">Pricing</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">FAQs</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">About</a>
                </li>
              </ul>
            </div>
        

          <div className="col-md-5 offset-md-1 mb-3">
            <form onSubmit={handleSubscribe}>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row font-size-29 justify-content-between py-4 my-4 border-top">
          <p>© 2025 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
                <i className="bi bi-youtube" style={{ color: 'red' }}></i>
            </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#" >
              <i className="bi bi-telegram" style={{ color: '#0088cc' }} ></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#" >
              
              <i className="bi bi-google-play" style={{ color: '#34A853' }}></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#" >
              <i className="bi bi-browser-chrome" style={{ color: '#4285F4' }}></i>

              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#" >
              <i className="bi bi-pinterest" style={{ color: '#E60023' }}></i>


              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#" >
              <i className="bi bi-twitter" style={{ color: '#1DA1F2' }}></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
