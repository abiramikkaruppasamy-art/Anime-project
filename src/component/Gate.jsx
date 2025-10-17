import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AnimeModal from "./AnimeModal";

// Predefined number of cards
const numCards = 6;

function Gate() {
  const navigate = useNavigate();
  const [animeDataList, setAnimeDataList] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading,setIsLoading]=useState(true);

  useEffect(() => {
    const cacheKey = "gate_api_data";
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
          `https://api.jikan.moe/v4/anime?q=gate&limit=10`
        );
        const data = response.data.data;
        setAnimeList(data);
        // Use images from the search API response
        const images = data
          .map((anime) => anime.images.jpg.image_url)
          .slice(0, numCards);
          const cacheData = {animeList:data,images};
          localStorage.setItem(cacheKey, JSON.stringify(cacheData));
        setAnimeDataList(
          images.length === numCards
            ? images
            : [
                ...images,
                ...new Array(numCards - images.length).fill(
                  `/assets/gate/fallback.jpg`
                ),
              ]
        ); // Fallback
      } catch (error) {
        console.error("Error fetching anime data:", error);
        setAnimeDataList(new Array(numCards).fill(`/assets/gate/fallback.jpg`)); // Fallback
      }finally{
        setIsLoading(false);
      }
    };

    fetchAnimeData();
  }, []);

  const handleCardClick = (index) => {
    const matchingAnime = animeList[index % animeList.length] || animeList[0]; // Cycle through or default to first
    setSelectedAnime(matchingAnime);
    setSelectedImage(animeDataList[index] || "/assets/gate/fallback.jpg");
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
      
        <div className="naru">
          <h1>Gate </h1>
        </div>
      </div>

      <div className="container">
        {animeDataList.length === 0 ? (
          <p className="text-center">Loading...</p>
        ) : (
          Array.from({ length: numCards }, (_, index) => (
            <div
              key={index}
              className="card mb-4"
              onClick={() => handleCardClick(index)}
            >
              <img
                src={animeDataList[index] || `/assets/naruto/id-269.jpg`}
                alt={`Gate ${index + 1}`}
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

export default Gate;
