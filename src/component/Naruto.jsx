import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AnimeModal from "./AnimeModal";

const numCards = 6;

function Naruto() {
  const navigate = useNavigate();
  const [animeDataList, setAnimeDataList] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const cacheKey = "naruto_api_data";
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      const data = JSON.parse(cachedData);
      setAnimeList(data.animeList);
      setAnimeDataList(data.images);
      return;
    }

    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime?q=naruto&limit=10`
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
                  `/assets/naruto/id-20.jpg`
                ),
              ]
        );
      } catch (error) {
        console.error("Error fetching anime data:", error);
        setAnimeDataList(new Array(numCards).fill(`/assets/naruto/id-20.jpg`));
      }
    };

    fetchAnimeData();
  }, []);

  const handleCardClick = (index) => {
    const matchingAnime = animeList[index % animeList.length] || animeList[0];
    setSelectedAnime(matchingAnime);
    setSelectedImage(animeDataList[index] || "/assets/naruto/id-20.jpg");
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
              aria-label="Go back to Genres"
              style={{ padding: "10px", fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
            ></i>
            Popular
          </h1>
        </div>
        <div className="naru">
          <h1>Naruto</h1>
        </div>
      </div>

      <div className="container">
        {animeDataList.length === 0 ? (
          <p className="text-center" style={{ fontSize: "clamp(1rem, 3vw, 1.2rem)", color: "#f1cf54" }}>
            Loading...
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
                alt={`Naruto ${index + 1}`}
                loading="lazy"
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

export default Naruto;