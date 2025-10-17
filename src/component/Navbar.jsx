
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Mapping of search keywords to routes (case-insensitive)
  const keywordRoutes = {
    naruto: "/naruto",
    bleach: "/bleach",
    fairytail: "/fairytail",
    clannad: "/clannad",
    toradora: "/toradora",
    horimiya: "/horimiya",
    deathnode: "/deathnode",
    tokyoghoul: "/tokyoghoul",
    monster: "/monster",
    swordart: "/swordart",
   
    gate: "/gate",
    konosuba: "/konosuda",
   
    papular: "/papular",
    romance: "/romance",
    dark: "/dark",
    fantasy: "/fantasy",
    genres: "/genres",
    home: "/",
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.trim().toLowerCase();
    const firstLetter = query[12345];
    const matchedRoute =
      Object.keys(keywordRoutes).find((key) => key.includes(query)) || "/";
    navigate(keywordRoutes[matchedRoute]);
    setSearchQuery("");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-black"
      aria-label="Offcanvas navbar large"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          AnimeZone
        </a>
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
            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
              Offcanvas
            </h5>
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  role="button"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </a>
              </li>
              {/* <li className="nav-item dropdown">
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
                  <li>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        navigate("/naruto");
                      }}
                    >
                      Naruto
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        navigate("/bleach");
                      }}
                    >
                      Bleach Shonen
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        navigate("/fairytail");
                      }}
                    >
                      Fairy Tail
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        navigate("/clannad");
                      }}
                    >
                      Clannad
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        navigate("/toradora");
                      }}
                    >
                      Toradora
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        navigate("/horimiya");
                      }}
                    >
                      Horimiya
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        navigate("/deathnode");
                      }}
                    >
                      Death Note
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        navigate("/tokyoghoul");
                      }}
                    >
                      Tokyo Ghoul
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        navigate("/monster");
                      }}
                    >
                      Monster
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        navigate("/swordart");
                      }}
                    >
                      Sword Art Online
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        navigate("/gate");
                      }}
                    >
                      Gate
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        navigate("/konosuda");
                      }}
                    >
                      Konosuba
                    </a>
                  </li>
                </ul>
              </li> */}
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
                  <li>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        navigate("/Papular");
                      }}
                    >
                      Popular
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        navigate("/romance");
                      }}
                    >
                      Romance
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        navigate("/dark");
                      }}
                    >
                      Dark
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        navigate("/fantasy");
                      }}
                    >
                      Fantasy
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" role="button" onClick={()=>{
                  navigate("/about")
                }}>
                  About
                </a>
              </li>
            </ul>

            <form
              className="d-flex mt-3 mt-lg-0"
              role="search"
              onSubmit={handleSearch}
            >
              <input
                className="form-control me-2 bg-warning"
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search"
              />
              <button
                className="btn btn-outline-warning text-white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;