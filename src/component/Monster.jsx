import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AnimeModal from "./AnimeModal";

const numCards = 6;

function Monster() {
  const navigate = useNavigate();
  const [animeDataList, setAnimeDataList] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cacheKey = "monster_api_data";
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      const data = JSON.parse(cachedData);
      setAnimeList(data.animeList);
      setAnimeDataList(data.images);
      setIsLoading(false);
      return;
    }

    const fetchAnimeData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime?q=monster&limit=10`,
          { timeout: 10000 }
        );
        const data = response.data.data;
        setAnimeList(data);
        const images = data
          .map((anime) => anime.images.jpg.image_url)
          .slice(0, numCards);
        const cacheData = { animeList: data, images };
        localStorage.setItem(cacheKey, JSON.stringify(cacheData));
        setAnimeDataList(
          images.length === numCards
            ? images
            : [
                ...images,
                ...new Array(numCards - images.length).fill(
                  `/assets/monster/fallback.jpg`
                ),
              ]
        );
      } catch (error) {
        console.error("Error fetching Monster data:", error);
        setAnimeDataList(new Array(numCards).fill(`/assets/monster/fallback.jpg`));
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnimeData();
  }, []);

  const handleCardClick = (index) => {
    const matchingAnime = animeList[index % animeList.length] || animeList[0];
    setSelectedAnime(matchingAnime);
    setSelectedImage(animeDataList[index] || "/assets/monster/fallback.jpg");
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
       
        <div className="death">
          <h1>Monster</h1>
        </div>
      </div>

      <div className="container">
        {isLoading ? (
          <p className="text-center" style={{ fontSize: "clamp(1rem, 3vw, 1.2rem)", color: "#f1cf54" }}>
            Loading...
          </p>
        ) : animeDataList.length === 0 ? (
          <p className="text-center" style={{ fontSize: "clamp(1rem, 3vw, 1.2rem)", color: "#f1cf54" }}>
            No images available from API.
          </p>
        ) : (
          Array.from({ length: numCards }, (_, index) => (
            <div
              key={index}
              className="card mb-4"
              onClick={() => handleCardClick(index)}
            >
              <img
                src={animeDataList[index]}
                alt={`Monster ${index + 1}`}
                loading="lazy"
                style={{ borderRadius: "5px" }}
                onError={(e) => {
                  e.target.src = "/assets/monster/fallback.jpg";
                  console.log(`Monster image failed for index ${index}`);
                }}
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

export default Monster;