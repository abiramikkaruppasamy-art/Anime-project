import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AnimeModal from "./AnimeModal";

const animeId = 6702; // Fairy Tail

function FairyTail() {
  const navigate = useNavigate();
  const [animeDataList, setAnimeDataList] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cacheKey = "fairytail_api_data";
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      const data = JSON.parse(cachedData);
      setAnimeList(data.animeList);
      setAnimeDataList(data.images);
      setIsLoading(false);
      console.log("Fairy Tail used cached data");
      return;
    }

    const fetchAnimeData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime?q=fairy+tail&limit=10`,
          { timeout: 10000 }
        );
        const data = response.data.data;
        const images = data
          .map((anime) => anime.images.jpg.image_url)
          .slice(0, 6);
        const cacheData = { animeList: data, images };
        localStorage.setItem(cacheKey, JSON.stringify(cacheData));
        setAnimeList(data);
        setAnimeDataList(images);
        console.log("Fairy Tail fetched images:", images);
      } catch (error) {
        console.error("Error fetching Fairy Tail data:", error);
        setAnimeDataList([]); // API-only, no fallback
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnimeData();
  }, []);

  const handleCardClick = (index) => {
    const matchingAnime = animeList[index] || animeList[0];
    setSelectedAnime(matchingAnime);
    setSelectedImage(animeDataList[index] || animeDataList[0]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAnime(null);
    setSelectedImage("");
  };

  const numCards = animeDataList.length;

  return (
    <div className="head">
      <div className="head1">
        <div className="heleft bg-white">
          {/* Navigation icon can be added similarly if needed */}
        </div>
        <div className="naru">
          <h1>Fairy Tail</h1>
        </div>
      </div>

      <div className="container">
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : numCards === 0 ? (
          <p className="text-center">No images available from API.</p>
        ) : (
          Array.from({ length: numCards }, (_, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleCardClick(index)}
            >
              <img
                src={animeDataList[index]}
                alt={`Fairy Tail ${index + 1}`}
                onError={(e) => {
                  e.target.style.display = "none";
                  console.log(`Fairy Tail image failed for index ${index}`);
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

export default FairyTail;