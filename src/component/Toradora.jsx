// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import Image from "../assets/naruto/id-134494.jpg"
// import Image5 from "../assets/naruto/id-134496.jpg"
// import Image7 from "../assets/naruto/id-116734.jpg"
// import Image6 from "../assets/naruto/id-134493.jpg"
// import Image1 from "../assets/naruto/id-134496.jpg"
// import Image2 from "../assets/naruto/id-n-134487.jpg"
// import Image8 from "../assets/naruto/id-n-142503.jpg"
// import Image3 from "../assets/naruto/id-n-134485.jpg"
// import Image4 from "../assets/naruto/id-n-134484.jpg"

// function Toradora() {
//     const Navgate = useNavigate();
//   return (

//     <div className="head">
//       <div className="head1">
//       <div className="heleft bg-white">
//       {/* <h1>
//       <i className="bi bi-arrow-left-circle-fill" role="button" onClick={()=>{Navgate("/Genres")}}></i>Papular </h1> */}
//       </div>
//       <div className="naru">
//       <h1>Toradora</h1>
//       </div>
//       </div>

//     <div className='container'>
//       <div className="card">
//       <img src={Image} alt="images" />
//       </div>
//       <div className="card">
//       <img src={Image1} alt="images" />
//       </div>
//       <div className="card">
//       <img src={Image2} alt="images" />
//       </div>
//       <div className="card">
//       <img src={Image3} alt="images" />
//       </div>
//       <div className="card">
//       <img src={Image4} alt="images" />
//       </div>
//       <div className="card">
//       <img src={Image5} alt="images" />
//       </div>
//       <div className="card">
//       <img src={Image6} alt="images" />
//       </div>
//       <div className="card">
//       <img src={Image7} alt="images" />
//       </div>
//       <div className="card">
//       <img src={Image8} alt="images" />
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Toradora



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimeModal from "./AnimeModal";

const animeId = 4224; // Toradora!
const numCards = 8;

// Custom messages for each card
const toradoraMessages = [
  "Ryuuji meets Taiga!",
  "The Palmtop Tiger strikes!",
  "Minori’s cheerful energy!",
  "Ami’s secrets revealed!",
  "Ryuuji helps Taiga with her crush!",
  "The Christmas party begins!",
  "Snow, confessions, and feelings!",
  "A love story reaches its heartwarming end!",
];

function Toradora() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  const [animeDataList, setAnimeDataList] = useState([]);
  const [animeData, setAnimeData] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAnimePictures = async () => {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime/${animeId}/pictures`
        );
        if (!response.ok) throw new Error("Failed to fetch pictures");
        const data = await response.json();
        const pictures = data.data || [];
        setAnimeDataList(
          pictures.map((p) => p.jpg.image_url).slice(0, numCards)
        );
      } catch (error) {
        console.error("API Error:", error);
        setAnimeDataList(
          new Array(numCards).fill("/assets/toradora/id-4224.jpg")
        ); // Fallback
      }
    };
    fetchAnimePictures();
  }, []);

  const fetchAnimeData = async (id) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setAnimeData(data.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("API Error:", error);
      setAnimeData({
        title: "Error",
        synopsis: "Unable to load data. Please try again.",
      });
      setIsModalOpen(true);
    }
  };

  const handleCardClick = (index) => {
    setSelectedId(animeId);
    setSelectedMessage(toradoraMessages[index]);
    setSelectedImage(animeDataList[index] || "/assets/toradora/id-4224.jpg");
    fetchAnimeData(animeId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedId(null);
    setAnimeData(null);
    setSelectedMessage("");
    setSelectedImage("");
  };

  return (
    <div className="head">
      <div className="head1">
        <div className="heleft bg-white">{/* Navigation */}</div>
        <div className="naru">
          <h1>Toradora</h1>
        </div>
      </div>

      <div className="container">
        {Array.from({ length: numCards }, (_, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleCardClick(index)}
          >
            <img
              src={animeDataList[index] || `/assets/toradora/id-4224.jpg`}
              alt={`Toradora ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <AnimeModal
          anime={animeData}
          message={selectedMessage}
          cardImage={selectedImage}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Toradora;
