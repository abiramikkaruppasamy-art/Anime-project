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

      
      <div className="row align-items-center mb-5 px-4">
        <div className="col-md-5 mb-4 mb-md-0">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Image123}  style={{height:"400px" , width:"400px"}} className="d-block w-20" height={400} width={400} padding={10} alt="anime" />
              </div>
              <div className="carousel-item">
                <img src={Image543} style={{height:"400px" , width:"400px"}} className="d-block w-20"height={400} width={400} padding={10}  alt="anime" />
              </div>
              <div className="carousel-item">
                <img src={Image23} style={{height:"400px" , width:"400px"}} className="d-block w-20" height={400} width={400} padding={10}  alt="anime" />
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
              style={{position:"relative",left:"290px" , top:"-200px"}}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-md-7">
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

    </div>
  );
}

export default About;
