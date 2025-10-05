// // // import React from 'react'
// // // import { useNavigate } from 'react-router-dom'
// // // import Image from "../assets/Clannad/id-134494.jpg"
// // // import Image5 from "../assets/naruto/id-134496.jpg"
// // // import Image7 from "../assets/naruto/id-116734.jpg"
// // // import Image6 from "../assets/naruto/id-134493.jpg"
// // // import Image1 from "../assets/naruto/id-134496.jpg"
// // // import Image2 from "../assets/naruto/id-n-134487.jpg"
// // // import Image8 from "../assets/naruto/id-n-142503.jpg"
// // // import Image3 from "../assets/naruto/id-n-134485.jpg"
// // // import Image4 from "../assets/naruto/id-n-134484.jpg"

// // // function Clannad() {
// // //     const Navgate = useNavigate();
// // //   return (

// // //     <div className="head">
// // //       <div className="head1">
// // //       <div className="heleft">
// // //       <h1>
// // //       <i className="bi bi-arrow-left-circle-fill" role="button" onClick={()=>{Navgate("/Genres")}}></i>Romance</h1>
// // //       </div>
// // //       <div className="naru">
// // //       <h1>Clannad</h1>
// // //       </div>
// // //       </div>

// // //     <div className='container'>
// // //       <div className="card">
// // //       <img src={Image} alt="images" />
// // //       </div>
// // //       <div className="card">
// // //       <img src={Image1} alt="images" />
// // //       </div>
// // //       <div className="card">
// // //       <img src={Image2} alt="images" />
// // //       </div>
// // //       <div className="card">
// // //       <img src={Image3} alt="images" />
// // //       </div>
// // //       <div className="card">
// // //       <img src={Image4} alt="images" />
// // //       </div>
// // //       <div className="card">
// // //       <img src={Image5} alt="images" />
// // //       </div>
// // //       <div className="card">
// // //       <img src={Image6} alt="images" />
// // //       </div>
// // //       <div className="card">
// // //       <img src={Image7} alt="images" />
// // //       </div>
// // //       <div className="card">
// // //       <img src={Image8} alt="images" />
// // //       </div>
// // //     </div>
// // //     </div>
// // //   )
// // // }

// // // export default Clannad


// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import AnimeModal from "./AnimeModal";

// // const animeId = 2167; // Clannad
// // const numCards = 8;

// // // Custom messages for each card
// // const clannadMessages = [
// //   "Tomoya meets Nagisa!",
// //   "The drama club is revived!",
// //   "Kotomi’s past is revealed!",
// //   "Sunohara’s comedy moments!",
// //   "Fuko’s starfish dream!",
// //   "The school festival begins!",
// //   "Tomoya and Nagisa’s bond deepens!",
// //   "A story of family and hope!",
// // ];

// // function Clannad() {
// //   const navigate = useNavigate();
// //   const [selectedId, setSelectedId] = useState(null);
// //   const [animeDataList, setAnimeDataList] = useState([]);
// //   const [animeData, setAnimeData] = useState(null);
// //   const [selectedMessage, setSelectedMessage] = useState("");
// //   const [selectedImage, setSelectedImage] = useState("");
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   useEffect(() => {
// //     const fetchAnimePictures = async () => {
// //       try {
// //         const response = await fetch(
// //           `https://api.jikan.moe/v4/anime/${animeId}/pictures`
// //         );
// //         if (!response.ok) throw new Error("Failed to fetch pictures");
// //         const data = await response.json();
// //         const pictures = data.data || [];
// //         setAnimeDataList(
// //           pictures.map((p) => p.jpg.image_url).slice(0, numCards)
// //         );
// //       } catch (error) {
// //         console.error("API Error:", error);
// //         setAnimeDataList(
// //           new Array(numCards).fill("/assets/clannad/id-2167.jpg")
// //         ); // Fallback
// //       }
// //     };
// //     fetchAnimePictures();
// //   }, []);

// //   const fetchAnimeData = async (id) => {
// //     try {
// //       const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
// //       if (!response.ok) throw new Error("Failed to fetch data");
// //       const data = await response.json();
// //       setAnimeData(data.data);
// //       setIsModalOpen(true);
// //     } catch (error) {
// //       console.error("API Error:", error);
// //       setAnimeData({
// //         title: "Error",
// //         synopsis: "Unable to load data. Please try again.",
// //       });
// //       setIsModalOpen(true);
// //     }
// //   };

// //   const handleCardClick = (index) => {
// //     setSelectedId(animeId);
// //     setSelectedMessage(clannadMessages[index]);
// //     setSelectedImage(animeDataList[index] || "/assets/clannad/id-2167.jpg");
// //     fetchAnimeData(animeId);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedId(null);
// //     setAnimeData(null);
// //     setSelectedMessage("");
// //     setSelectedImage("");
// //   };

// //   return (
// //     <div className="head">
// //       <div className="head1">
// //         <div className="heleft">
// //         <h1>
// //             <i
// //               className="bi bi-arrow-left-circle-fill"
// //               role="button"
// //               onClick={() => navigate("/Genres")}
// //             ></i>
// //             Romance
// //           </h1>
// //         </div>
// //         <div className="naru">
// //           <h1>
// //             Clannad</h1>
// //         </div>
// //       </div>

// //       <div className="container">
// //         {Array.from({ length: numCards }, (_, index) => (
// //           <div
// //             key={index}
// //             className="card"
// //             onClick={() => handleCardClick(index)}
// //           >
// //             <img
// //               src={animeDataList[index] || `/assets/clannad/id-2167.jpg`}
// //               alt={`Clannad ${index + 1}`}
// //             />
// //           </div>
// //         ))}
// //       </div>

// //       {isModalOpen && (
// //         <AnimeModal
// //           anime={animeData}
// //           message={selectedMessage}
// //           cardImage={selectedImage}
// //           onClose={closeModal}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // export default Clannad;


// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function Clannad() {
//   const [animeList, setAnimeList] = useState([]);

//   const getAnime = async () => {
//     try {
//       const response = await axios.get('https://api.jikan.moe/v4/anime?q=clannad&limit=15');
//       setAnimeList(response.data.data);
//     } catch (error) {
//       console.error('Error fetching anime data:', error);
//     }
//   };

//   useEffect(() => {
//     getAnime();
//   }, []);

//   return (
//     <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#0b0c10" }}>
//       <div style={{ 
//         width: "90%", 
//         maxWidth: "900px", 
//         backgroundColor: "#1f1f1f", 
//         padding: "20px", 
//         borderRadius: "10px", 
//         boxShadow: "0 0 20px rgba(0,0,0,0.8)", 
//         overflowY: "auto",
//         maxHeight: "80vh",
//         color: "#fff"
//       }}>
//         <h2 className="text-warning text-center mb-4">clannad Anime</h2>

//         {animeList.length === 0 ? (
//           <p className="text-center">Loading...</p>
//         ) : (
//           animeList.map((anime) => (
//             <div key={anime.mal_id} className="mb-4 p-3" style={{ backgroundColor: "#272727", borderRadius: "8px" }}>
//               <h3>{anime.title}</h3>
//               <h4 className="text-secondary">{anime.title_synonyms?.join(', ')}</h4>
//               <div className="d-flex align-items-start gap-3">
//                 <img src={anime.images.jpg.image_url} alt={anime.title} width="120" style={{ borderRadius: "5px" }} />
//                 <div>
//                   <p>{anime.synopsis?.substring(0, 150)}...</p>
//                   <p>Members: {anime.members}</p>
//                   <p>Favorites: {anime.favorites}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Clannad;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AnimeModal from "./AnimeModal";

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
          .map((anime) => anime.images.jpg.image_url)
          .slice(0, numCards);
        setAnimeDataList(
          images.length === numCards
            ? images
            : [
                ...images,
                ...new Array(numCards - images.length).fill(
                  `/assets/clannad/id-20.jpg`
                ),
              ]
        ); // Fallback
      } catch (error) {
        console.error("Error fetching anime data:", error);
        setAnimeDataList(new Array(numCards).fill(`/assets/clannad/id-20.jpg`)); // Fallback
      }
    };

    fetchAnimeData();
  }, []);

  const handleCardClick = (index) => {
    const matchingAnime = animeList[index % animeList.length] || animeList[0]; // Cycle through or default to first
    setSelectedAnime(matchingAnime);
    setSelectedImage(animeDataList[index] || "/assets/clannad/id-20.jpg");
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
          <h1>clannad</h1>
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