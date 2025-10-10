import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AnimeModal from "./AnimeModal";
import HorimiyaImg from '../assets/horimiya.jpg';
import HoriImg from '../assets/hori.jpg';

// Predefined number of cards
const numCards = 9;

function Horimiya() {
  const navigate = useNavigate();
  const [animeDataList, setAnimeDataList] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(
            `https://api.jikan.moe/v4/anime?q=horimiya&limit=10`,
            { timeout: 10000 }
          );
        const data = response.data.data;
        setAnimeList(data);
        
        const images = data
          .map((anime) => anime?.images?.jpg?.image_url)
          .filter((url)=>url);
          // .slice(0, numCards);
          const fallbackImages = Array(numCards - images.length)
          .fill()
          .map((_, i) => (i % 2 === 0 ? HorimiyaImg : HoriImg));
        setAnimeDataList(
          images.length === numCards ? images : [...images, ...fallbackImages]
        );
      } catch (error) {
        console.error("Error fetching anime data:", error);
        setError("Failed to load anime data. Showing default images.");
        
        setAnimeDataList(
          Array(numCards)
            .fill()
            .map((_, i) => (i % 2 === 0 ? HorimiyaImg : HoriImg))
        );
      }
    };

    fetchAnimeData();
  }, []);

  const handleCardClick = (index) => {
    const matchingAnime = animeList[index % animeList.length] || animeList[0]; 
    setSelectedAnime(matchingAnime);
    setSelectedImage(animeDataList[index] || (index % 2 === 0 ? HorimiyaImg : HoriImg));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAnime(null);
    setSelectedImage("");
  };

  return (
    <div className="head">
      <div className="head1">
        <div className="heleft bg-white">
          {/* Navigation icon can be added similarly if needed */}
        </div>
        <div className="blea">
          <h1>Horimiya</h1>
        </div>
      </div>

      <div className="container">
        {animeDataList.length === 0 ? (
          <p className="text-center">Loading...</p>
        ) : (
          Array.from({ length: numCards }, (_, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleCardClick(index)}
            >
              <img
                src={animeDataList[index] ||(index % 2 === 0 ? HorimiyaImg : HoriImg)}
                alt={`Horimiya ${index + 1}`}
              />
            </div>
          ))
        )}
      </div>

      {isModalOpen && selectedAnime && (
        <AnimeModal
          anime={selectedAnime}
          cardImage={selectedImage}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Horimiya;
