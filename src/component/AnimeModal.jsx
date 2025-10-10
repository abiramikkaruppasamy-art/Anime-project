
import React from "react";
import "../index.css"; 

function AnimeModal({ anime, cardImage, onClose }) {
  if (!anime) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{anime.title}</h2>
          <i
            className="bi bi-x-circle modal-close"
            onClick={onClose}
            role="button"
            aria-label="Close modal"
          ></i>
        </div>
        <div className="modal-body">
          <img
            src={cardImage || "/placeholder.jpg"}
            alt={anime.title}
            className="modal-image"
          />
          <div className="modal-details">
            <p>
              <strong>Synopsis:</strong>{" "}
              {anime.synopsis.substring(0, 300) || "No synopsis available."}...
            </p>
            <p>
              <strong>Episodes:</strong> {anime.episodes || "Unknown"}
            </p>
            <p>
              <strong>Score:</strong>{" "}
              {anime.score ? `${anime.score}/10` : "N/A"}
            </p>
            <p>
              <strong>Members:</strong> {anime.members}
            </p>
            <p>
              <strong>Favorites:</strong> {anime.favorites}
            </p>
            <p>
              <strong>Genres:</strong>{" "}
              {anime.genres?.map((g) => g.name).join(", ") || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeModal;
