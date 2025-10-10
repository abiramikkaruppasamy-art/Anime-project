import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AnimeModal from "./AnimeModal";
import ClannadI from "../assets/clannad.jpg"
// Predefined number of cards
const numCards = 9;

function Clannad() {
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
          `https://api.jikan.moe/v4/anime?q=clannad&limit=10`
        );
        const data = response.data.data;
        setAnimeList(data); 
        // Use images from the search API response
        const images = data
          .map((anime) => anime?.images?.jpg.image_url)
          .slice(0, numCards);
        setAnimeDataList(
          images.length === numCards
            ? images
            : [
                ...images,
                ...new Array(numCards - images.length).fill(
                  ClannadI
                ),

              ]
        ); // Fallback
      } catch (error) {
        console.error("Error fetching anime data:", error);
        setAnimeDataList(new Array(numCards).fill(ClannadI)); // Fallback
      }
    };

    fetchAnimeData();
  }, []);

  const handleCardClick = (index) => {
    const matchingAnime = animeList[index % animeList.length] || animeList[0]; // Cycle through or default to first
    setSelectedAnime(matchingAnime);
    setSelectedImage(animeDataList[index] || ClannadI);
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
        <div className="heleft">
          <h1>
            <i
              className="bi bi-arrow-left-circle-fill"
              role="button"
              onClick={() => navigate("/Genres")}
            ></i>
            Romance
          </h1>
        </div>
        <div className="naru">
          <h1>Clannad</h1>
        </div>
      </div>

      <div className="container">
        {animeDataList.length === 0 ? (
          <p className="text-center">Loading...</p>
        ) : (
          Array.from({ length: numCards }, (_, index) => (
            <div
              key={index}
              className="card mb-4 "
              style={{
                // backgroundColor: "#272727",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => handleCardClick(index)}
            >
              <img
                src={animeDataList[index]}
                alt={`Clannad ${index + 1}`}
                width="120"
                style={{ borderRadius: "5px" }}
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

export default Clannad;
