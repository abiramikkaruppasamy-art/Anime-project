import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Fantasy() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchFantasyAnime = async () => {
      try {
        const animeIds = [11757, 28907, 30831]; // Sword Art Online, Gate, Konosuba
        const fetchedImages = [];
  
        for (const id of animeIds) {
          const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
          const data = await response.json();
          fetchedImages.push({
            url: data.data.images.jpg.image_url,
            alt: data.data.title || 'Fantasy Anime Image',
          });
          // Fetch one recommended anime for variety
          const relatedResponse = await fetch(`https://api.jikan.moe/v4/anime/${id}/recommendations?limit=1`);
          const relatedData = await relatedResponse.json();
          if (relatedData.data.length > 0) {
            const relatedAnime = relatedData.data[0].entry;
            fetchedImages.push({
              url: relatedAnime.images.jpg.image_url,
              alt: relatedAnime.title || 'Related Anime Image',
            });
          }
        }
  
        setImages(fetchedImages.slice(0, 6)); 
      } catch (error) {
        console.error('Error fetching fantasy anime images:', error);
      }
    };
  
    fetchFantasyAnime();
  }, []);
  
  return (
    <div className="section-body">
      <h1>Fantasy</h1>
      <div>
        {images.length > 0 ? (
          images.map((image, index) => (
            <img key={index} src={image.url} className="pimg" alt={image.alt} />
          ))
        ) : (
          <p>Loading images...</p>
        )}
        <i
          className="wi bi-arrow-right-circle-fill"
          role="button"
          onClick={() => navigate('/Fantasyanime')}
        ></i>
      </div>
    </div>
  );
}

export default Fantasy;