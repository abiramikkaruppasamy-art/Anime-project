import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Papular() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSpecificAnime = async () => {
      try {
        const animeIds = [20, 6702, 269]; // Naruto, Fairy Tail, Bleach
        const fetchedImages = [];
  
        for (const id of animeIds) {
          const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
          const data = await response.json();
          fetchedImages.push({
            url: data.data.images.jpg.image_url,
            alt: data.data.title || 'Anime Image',
          });
          // Optionally fetch related anime or more results
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
  
        setImages(fetchedImages.slice(0, 9)); // Limit to 6 images
      } catch (error) {
        console.error('Error fetching anime images:', error);
      }
    };
  
    fetchSpecificAnime();
  }, []);

  return (
    <div className="section-body">
      <h1>Popular</h1>
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
          onClick={() => navigate('/papularanime')}
        ></i>
      </div>
    </div>
  );
}

export default Papular;