import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dark() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDarkAnime = async () => {
      try {
        const animeIds = [1535, 22319, 19]; // Death Note, Tokyo Ghoul, Monster
        const fetchedImages = [];
  
        for (const id of animeIds) {
          const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
          const data = await response.json();
          fetchedImages.push({
            url: data.data.images.jpg.image_url,
            alt: data.data.title || 'Dark Anime Image',
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
        console.error('Error fetching dark anime images:', error);
      }
    };
  
    fetchDarkAnime();
  }, []);
  return (
    <div className="section-body">
      <h1>Dark</h1>
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
          onClick={() => navigate('/darkanime')}
        ></i>
      </div>
    </div>
  );
}

export default Dark;