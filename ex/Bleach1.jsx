import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AnimeModal from "./AnimeModal";

const animeId = 42897; // Horimiya MAL ID
const numCards = 9;

function Horimiya() {
  const navigate = useNavigate();
  const [animeDataList, setAnimeDataList] = useState([]);
  const [animeData, setAnimeData] = useState(null);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimePictures = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeId}/pictures`, { timeout: 10000 });
        const data = response.data.data || [];
        console.log("Horimiya API pictures response:", data);
        const images = data
          .map((p) => p.jpg?.image_url)
          .filter(url => url && typeof url === "string" && url.startsWith("http"))
          .slice(0, numCards); // Take up to 9 unique images
        console.log("Horimiya fetched images:", images);
        setAnimeDataList(images.length > 0 ? images : []); // Set only API images
      } catch (error) {
        console.error("Error fetching Horimiya pictures:", error);
        setError("Failed to load images from API.");
        setAnimeDataList([]); // Empty array on error
      } finally {
        setIsLoading(false);
      }
    };

    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeId}`, { timeout: 10000 });
        setAnimeData(response.data.data);
      } catch (error) {
        console.error("Error fetching Horimiya data:", error);
        setError("Failed to load anime data from API.");
        setAnimeData(null);
      }
    };

    fetchAnimePictures();
    fetchAnimeData();
  }, []);

  const handleCardClick = (index) => {
    const normalizedIndex = index % animeDataList.length; // Cycle if fewer than 9
    setSelectedAnime(animeData); // Use main anime data
    setSelectedImage(animeDataList[normalizedIndex] || animeDataList[0]);
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
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
        <div className="blea">
          <h1>Horimiya</h1>
        </div>
      </div>

      <div className="container">
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : animeDataList.length === 0 ? (
          <p className="text-center">No images available from API.</p>
        ) : (
          Array.from({ length: numCards }, (_, index) => {
            const imageIndex = index % animeDataList.length;
            return (
              <div
                key={index}
                className="card"
                onClick={() => handleCardClick(index)}
              >
                <img
                  src={animeDataList[imageIndex]}
                  alt={`Horimiya ${index + 1}`}
                  onError={(e) => { e.target.style.display = 'none'; console.log(`Horimiya image failed for index ${index}`); }}
                />
              </div>
            );
          })
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