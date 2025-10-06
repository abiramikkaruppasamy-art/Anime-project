import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimeModal from "./AnimeModal";

const animeId = 6702; // Fairy Tail
const numCards = 8;

// Custom messages for each card
const fairyTailMessages = [
  "Natsu fights a dragon!",
  "Lucy joins Fairy Tail!",
  "The S-Class trials begin!",
  "Erza's armor shines!",
  "Gray vs. Lyon!",
  "The Grand Magic Games start!",
  "Natsu masters Fire Dragon mode!",
  "Happily ever after!",
  "Makarov’s leadership shines!",
];

function FairyTail() {
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
          new Array(numCards).fill("/assets/naruto/id-6702.jpg")
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
    setSelectedMessage(fairyTailMessages[index]);
    setSelectedImage(animeDataList[index] || "/assets/naruto/id-6702.jpg"); // Set the card's image
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
        <div className="heleft bg-white">
          {/* Navigation icon can be added similarly if needed */}
        </div>
        <div className="naru">
          <h1>Fairy Tail</h1>
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
              src={animeDataList[index] || `/assets/naruto/id-6702.jpg`}
              alt={`Fairy Tail ${index + 1}`}
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

export default FairyTail;
