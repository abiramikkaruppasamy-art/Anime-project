import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const Navgate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black" aria-label="Offcanvas navbar large">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Responsive offcanvas navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" role="button" onClick={()=>{Navgate("/")}}>Home</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 Anime list
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" role="button" onClick={()=>{Navgate("/naruto")}}>Naruto</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" role="button" onClick={()=>{Navgate("/bleach")}}>Bleach Shonen</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" role="button" onClick={()=>{Navgate("/fairytail")}}>Fairy Tail</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" role="button" onClick={()=>{Navgate("/clannad")}}>Clannad</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" role="button" onClick={()=>{Navgate("/toradora")}}>Toradora</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" role="button" onClick={()=>{Navgate("/horimiya")}}>Horimiya</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" role="button" onClick={()=>{Navgate("/deathnode")}}>Death Note</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" role="button" onClick={()=>{Navgate("/tokyoghoul")}}>Tokyo Ghoul</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" role="button" onClick={()=>{Navgate("/monster")}}>Monster</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" role="button" onClick={()=>{Navgate("/swordart")}}>Sword Art bnline</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" role="button" onClick={()=>{Navgate("/gate")}}>Gate</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" role="button" onClick={()=>{Navgate("/konosuda")}}>Konosuda</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                Genres
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" role="button" onClick={()=>{Navgate("/papular")}}>Papular</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" role="button" onClick={()=>{Navgate("/romance")}}>Romance</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" role="button" onClick={()=>{Navgate("/dark")}}>Dark</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" role="button" onClick={()=>{Navgate("/fantasy")}}>Fantasy</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>

            <form className="d-flex mt-3 mt-lg-0" role="search">
              <input className="form-control me-2 bg-warning" type="search" placeholder="Search" ba aria-label="Search" />
              <button className="btn btn-outline-warning text-white" type="submit">
                
                Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;