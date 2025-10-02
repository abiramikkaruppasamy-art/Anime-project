import React from "react";

function AnimeModal({ anime, message, cardImage, onClose }) {
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
            src={
              cardImage ||
              anime.images?.jpg?.large_image_url ||
              "/placeholder.jpg"
            }
            alt={anime.title}
            className="modal-image"
          />
          <div className="modal-details">
            <p>
              <strong>Message:</strong>{" "}
              {message || "No special message available."}
            </p>
            <p>
              <strong>Synopsis:</strong>{" "}
              {anime.synopsis || "No synopsis available."}
            </p>
            <p>
              <strong>Episodes:</strong> {anime.episodes || "Unknown"}
            </p>
            <p>
              <strong>Score:</strong>{" "}
              {anime.score ? `${anime.score}/10` : "N/A"}
            </p>
            <p>
              <strong>Genres:</strong>{" "}
              {anime.genres?.map((g) => g.name).join(", ") || "N/A"}
            </p>
            <p>
              <strong>Year:</strong> {anime.year || "Unknown"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeModal;
