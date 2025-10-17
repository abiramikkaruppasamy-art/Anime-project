import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AnimeModal from "./AnimeModal";

// Predefined number of cards
const numCards = 6;

function Tokyoghoul() {
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
          `https://api.jikan.moe/v4/anime?q=Tokyo%20Ghoul&limit=10`
        );
        const data = response.data.data;
        setAnimeList(data);
        // Use images from the search API response
        const images = data
          .map((anime) => anime.images.jpg.image_url)
          .slice(0, numCards);
        setAnimeDataList(
          images.length === numCards
            ? images
            : [
                ...images,
                ...new Array(numCards - images.length).fill(
                  `/assets/naruto/id-269.jpg`
                ),
              ]
        ); // Fallback
      } catch (error) {
        console.error("Error fetching anime data:", error);
        setAnimeDataList(new Array(numCards).fill(`/assets/naruto/id-269.jpg`)); // Fallback
      }
    };

    fetchAnimeData();
  }, []);

  const handleCardClick = (index) => {
    const matchingAnime = animeList[index % animeList.length] || animeList[0]; // Cycle through or default to first
    setSelectedAnime(matchingAnime);
    setSelectedImage(animeDataList[index] || "/assets/naruto/id-269.jpg");
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
       
        <div className="blea">
          <h1>Tokyo Ghoul </h1>
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
                src={animeDataList[index] || `/assets/naruto/id-269.jpg`}
                alt={`Tokyoghoul ${index + 1}`}
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

export default Tokyoghoul;
