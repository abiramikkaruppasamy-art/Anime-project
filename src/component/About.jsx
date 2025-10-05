import React from "react";
import Image123 from "../assets/naruto/id-116734.jpg";
import Image543 from "../assets/naruto/id-134493.jpg";
import Image23 from "../assets/bleach/7499.jpg";
// import Image26 from "/a/zhahi/Project-anime/newappanime/src/assets/naruto/id-134494";

function About() {
  return (
    <div
      className="container-fluid py-5 text-light"
      style={{ backgroundColor: "#0b0c10", minHeight: "100vh" }}
    >
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-warning">About AnimeZone</h1>
        <p className="lead text-secondary">
          Step into the world of anime — your zone for everything from Naruto to Demon Slayer!
        </p>
      </div>

      {/* Intro Section */}
      <div className="row align-items-center mb-5 px-4">
        <div className="col-md-6 mb-4 mb-md-0">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Image123} className="d-block w-100" height={600} width={1000} alt="anime" />
              </div>
              <div className="carousel-item">
                <img src={Image543} className="d-block w-100"height={600} width={1000}  alt="anime" />
              </div>
              <div className="carousel-item">
                <img src={Image23} className="d-block w-100" height={600} width={1000}  alt="anime" />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <h2 className="text-warning mb-3">Welcome to AnimeZone</h2>
          <p>
            <strong>AnimeZone</strong> is a creative space made by anime fans for anime fans.
            Explore your favorite shows, meet beloved characters, and uncover the stories
            behind every epic moment in anime. Whether you love the action of Naruto,
            the beauty of Clannad, or the thrill of Attack on Titan — AnimeZone is your ultimate destination.
          </p>
          <p>
            We aim to make anime discovery easy, enjoyable, and inspiring for fans across the globe.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="text-center mb-5 px-3">
        <h2 className="text-warning mb-3">Our Mission</h2>
        <p className="mx-auto" style={{ maxWidth: "800px" }}>
          To build a one-stop platform for all anime lovers — where you can explore
          shows, read summaries, learn about characters, and celebrate the anime culture
          that connects millions worldwide.
        </p>
      </div>

      {/* Feature Section */}
      <div className="row text-dark px-4">
        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h5 className="card-title text-primary">Explore Anime</h5>
              <p className="card-text">
                Browse through popular and classic anime series with detailed info and images.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h5 className="card-title text-primary">Character Details</h5>
              <p className="card-text">
                Discover your favorite anime characters and their incredible stories.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h5 className="card-title text-primary">Anime Updates</h5>
              <p className="card-text">
                Stay updated with the latest anime releases, news, and recommendations.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h5 className="card-title text-primary">Community Zone</h5>
              <p className="card-text">
                Join other anime fans, share thoughts, and celebrate anime together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
