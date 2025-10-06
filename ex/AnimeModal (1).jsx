// // // // // import React from "react";

// // // // // function AnimeModal({ anime, message, cardImage, onClose }) {
// // // // //   if (!anime) return null;

// // // // //   return (
// // // // //     <div className="modal-overlay" onClick={onClose}>
// // // // //       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// // // // //         <div className="modal-header">
// // // // //           <h2>{anime.title}</h2>
// // // // //           <i
// // // // //             className="bi bi-x-circle modal-close"
// // // // //             onClick={onClose}
// // // // //             role="button"
// // // // //             aria-label="Close modal"
// // // // //           ></i>
// // // // //         </div>
// // // // //         <div className="modal-body">
// // // // //           <img
// // // // //             src={
// // // // //               cardImage ||
// // // // //               anime.images?.jpg?.large_image_url ||
// // // // //               "/placeholder.jpg"
// // // // //             }
// // // // //             alt={anime.title}
// // // // //             className="modal-image"
// // // // //           />
// // // // //           <div className="modal-details">
// // // // //             <p>
// // // // //               <strong>Message:</strong>{" "}
// // // // //               {message || "No special message available."}
// // // // //             </p>
// // // // //             <p>
// // // // //               <strong>Synopsis:</strong>{" "}
// // // // //               {anime.synopsis || "No synopsis available."}
// // // // //             </p>
// // // // //             <p>
// // // // //               <strong>Episodes:</strong> {anime.episodes || "Unknown"}
// // // // //             </p>
// // // // //             <p>
// // // // //               <strong>Score:</strong>{" "}
// // // // //               {anime.score ? `${anime.score}/10` : "N/A"}
// // // // //             </p>
// // // // //             <p>
// // // // //               <strong>Genres:</strong>{" "}
// // // // //               {anime.genres?.map((g) => g.name).join(", ") || "N/A"}
// // // // //             </p>
// // // // //             <p>
// // // // //               <strong>Year:</strong> {anime.year || "Unknown"}
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default AnimeModal;

// // // // import React from "react";

// // // // function AnimeModal({ anime, onClose }) {
// // // //   if (!anime) return null;

// // // //   return (
// // // //     <div
// // // //       className="modal-overlay"
// // // //       style={{
// // // //         position: "fixed",
// // // //         top: 0,
// // // //         left: 0,
// // // //         right: 0,
// // // //         bottom: 0,
// // // //         backgroundColor: "rgba(0,0,0,0.7)",
// // // //         display: "flex",
// // // //         justifyContent: "center",
// // // //         alignItems: "center",
// // // //         zIndex: 1000,
// // // //       }}
// // // //       onClick={onClose}
// // // //     >
// // // //       <div
// // // //         className="modal-content"
// // // //         style={{
// // // //           backgroundColor: "#1f1f1f",
// // // //           padding: "20px",
// // // //           borderRadius: "10px",
// // // //           width: "90%",
// // // //           maxWidth: "600px",
// // // //           color: "#fff",
// // // //           position: "relative",
// // // //           overflowY: "auto",
// // // //           maxHeight: "80vh",
// // // //         }}
// // // //         onClick={(e) => e.stopPropagation()}
// // // //       >
// // // //         <button
// // // //           style={{
// // // //             position: "absolute",
// // // //             top: "10px",
// // // //             right: "10px",
// // // //             backgroundColor: "#272727",
// // // //             border: "none",
// // // //             color: "#fff",
// // // //             padding: "5px 10px",
// // // //             borderRadius: "5px",
// // // //             cursor: "pointer",
// // // //           }}
// // // //           onClick={onClose}
// // // //         >
// // // //           Close
// // // //         </button>
// // // //         <h2>{anime.title}</h2>
// // // //         <h4 className="text-secondary">
// // // //           {anime.title_synonyms?.join(", ") || "No synonyms available"}
// // // //         </h4>
// // // //         <div className="d-flex align-items-start gap-3">
// // // //           <img
// // // //             src={anime.images.jpg.image_url}
// // // //             alt={anime.title}
// // // //             width="150"
// // // //             style={{ borderRadius: "5px" }}
// // // //           />
// // // //           <div>
// // // //             <p>
// // // //               <strong>Synopsis:</strong>{" "}
// // // //               {anime.synopsis || "No synopsis available."}
// // // //             </p>
// // // //             <p>
// // // //               <strong>Episodes:</strong> {anime.episodes || "Unknown"}
// // // //             </p>
// // // //             <p>
// // // //               <strong>Score:</strong>{" "}
// // // //               {anime.score ? `${anime.score}/10` : "N/A"}
// // // //             </p>
// // // //             <p>
// // // //               <strong>Members:</strong> {anime.members}
// // // //             </p>
// // // //             <p>
// // // //               <strong>Favorites:</strong> {anime.favorites}
// // // //             </p>
// // // //             <p>
// // // //               <strong>Genres:</strong>{" "}
// // // //               {anime.genres?.map((g) => g.name).join(", ") || "N/A"}
// // // //             </p>
// // // //             <p>
// // // //               <strong>Year:</strong> {anime.year || "Unknown"}
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default AnimeModal;

// // // import React from "react";

// // // function AnimeModal({ anime, onClose }) {
// // //   if (!anime) return null;

// // //   return (
// // //     <div
// // //       className="modal-overlay"
// // //       style={{
// // //         position: "fixed",
// // //         top: 0,
// // //         left: 0,
// // //         right: 0,
// // //         bottom: 0,
// // //         backgroundColor: "rgba(0,0,0,0.7)",
// // //         display: "flex",
// // //         justifyContent: "center",
// // //         alignItems: "center",
// // //         zIndex: 1000,
// // //       }}
// // //       onClick={onClose}
// // //     >
// // //       <div
// // //         className="modal-content"
// // //         style={{
// // //           backgroundColor: "#1f1f1f",
// // //           padding: "20px",
// // //           borderRadius: "10px",
// // //           width: "90%",
// // //           maxWidth: "600px",
// // //           color: "#fff",
// // //           position: "relative",
// // //           overflowY: "auto",
// // //           maxHeight: "80vh",
// // //         }}
// // //         onClick={(e) => e.stopPropagation()}
// // //       >
// // //         <button
// // //           style={{
// // //             position: "absolute",
// // //             top: "10px",
// // //             right: "10px",
// // //             backgroundColor: "#272727",
// // //             border: "none",
// // //             color: "#fff",
// // //             padding: "5px 10px",
// // //             borderRadius: "5px",
// // //             cursor: "pointer",
// // //           }}
// // //           onClick={onClose}
// // //         >
// // //           Close
// // //         </button>
// // //         <h2>{anime.title}</h2>
// // //         <h4 className="text-secondary">
// // //           {anime.title_synonyms?.join(", ") || "No synonyms available"}
// // //         </h4>
// // //         <div className="d-flex align-items-start gap-3">
// // //           <img
// // //             src={anime.images.jpg.image_url}
// // //             alt={anime.title}
// // //             width="150"
// // //             style={{ borderRadius: "5px" }}
// // //           />
// // //           <div>
// // //             <p>
// // //               <strong>Synopsis:</strong>{" "}
// // //               {anime.synopsis.substring(0, 200) || "No synopsis available."}...
// // //             </p>
// // //             <p>
// // //               <strong>Episodes:</strong> {anime.episodes || "Unknown"}
// // //             </p>
// // //             <p>
// // //               <strong>Score:</strong>{" "}
// // //               {anime.score ? `${anime.score}/10` : "N/A"}
// // //             </p>
// // //             <p>
// // //               <strong>Members:</strong> {anime.members}
// // //             </p>
// // //             <p>
// // //               <strong>Favorites:</strong> {anime.favorites}
// // //             </p>
// // //             <p>
// // //               <strong>Genres:</strong>{" "}
// // //               {anime.genres?.map((g) => g.name).join(", ") || "N/A"}
// // //             </p>
// // //             {/* <p>
// // //               <strong>Year:</strong> {anime.year || "Unknown"}
// // //             </p> */}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default AnimeModal;

// // import React from "react";

// // function AnimeModal({ anime, cardImage, onClose }) {
// //   if (!anime) return null;

// //   return (
// //     <div
// //       className="modal-overlay"
// //       style={{
// //         position: "fixed",
// //         top: 0,
// //         left: 0,
// //         right: 0,
// //         bottom: 0,
// //         backgroundColor: "rgba(0,0,0,0.7)",
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         zIndex: 1000,
// //       }}
// //       onClick={onClose}
// //     >
// //       <div
// //         className="modal-content"
// //         style={{
// //           backgroundColor: "#1f1f1f",
// //           padding: "20px",
// //           borderRadius: "10px",
// //           width: "90%",
// //           maxWidth: "600px",
// //           color: "#fff",
// //           position: "relative",
// //           overflowY: "auto",
// //           maxHeight: "80vh",
// //         }}
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         <button
// //           style={{
// //             position: "absolute",
// //             top: "10px",
// //             right: "10px",
// //             backgroundColor: "#272727",
// //             border: "none",
// //             color: "#fff",
// //             padding: "5px 10px",
// //             borderRadius: "5px",
// //             cursor: "pointer",
// //           }}
// //           onClick={onClose}
// //         >
// //           Close
// //         </button>
// //         <h2>{anime.title}</h2>
// //         <h4 className="text-secondary">
// //           {anime.title_synonyms?.join(", ") || "No synonyms available"}
// //         </h4>
// //         <div className="d-flex align-items-start gap-3">
// //           <img
// //             src={cardImage}
// //             alt={anime.title}
// //             width="150"
// //             style={{ borderRadius: "5px" }}
// //           />
// //           <div>
// //             <p>
// //               <strong>Synopsis:</strong>{" "}
// //               {anime.synopsis.substring(0, 250) || "No synopsis available."}...
// //             </p>
// //             <p>
// //               <strong>Episodes:</strong> {anime.episodes || "Unknown"}
// //             </p>
// //             <p>
// //               <strong>Score:</strong>{" "}
// //               {anime.score ? `${anime.score}/10` : "N/A"}
// //             </p>
// //             <p>
// //               <strong>Members:</strong> {anime.members}
// //             </p>
// //             <p>
// //               <strong>Favorites:</strong> {anime.favorites}
// //             </p>
// //             <p>
// //               <strong>Genres:</strong>{" "}
// //               {anime.genres?.map((g) => g.name).join(", ") || "N/A"}
// //             </p>
// //             <p>
// //               <strong>Year:</strong> {anime.year || "Unknown"}
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AnimeModal;

// import React from "react";

// function AnimeModal({ anime, cardImage, onClose }) {
//   if (!anime) return null;

//   return (
//     <div
//       className="modal-overlay"
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: "rgba(0,0,0,0.7)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: 1000,
//       }}
//       onClick={onClose}
//     >
//       <div
//         className="modal-content"
//         style={{
//           backgroundColor: "#1f1f1f",
//           padding: "20px",
//           borderRadius: "10px",
//           width: "90%",
//           maxWidth: "600px",
//           color: "#fff",
//           position: "relative",
//           overflowY: "auto",
//           maxHeight: "80vh",
//         }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           style={{
//             position: "absolute",
//             top: "10px",
//             right: "10px",
//             backgroundColor: "#272727",
//             border: "none",
//             color: "#fff",
//             padding: "5px 10px",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//           onClick={onClose}
//         >
//           Close
//         </button>
//         <h2>{anime.title}</h2>
//         <h4 className="text-secondary">
//           {anime.title_synonyms?.join(", ") || "No synonyms available"}
//         </h4>
//         <div className="d-flex align-items-start gap-3">
//           <img
//             src={cardImage}
//             alt={anime.title}
//             width="150"
//             style={{ borderRadius: "5px" }}
//           />
//           <div>
//             <p>
//               <strong>Synopsis:</strong>{" "}
//               {anime.synopsis.substring(0, 200) || "No synopsis available."}...
//             </p>
//             <p>
//               <strong>Episodes:</strong> {anime.episodes || "Unknown"}
//             </p>
//             <p>
//               <strong>Score:</strong>{" "}
//               {anime.score ? `${anime.score}/10` : "N/A"}
//             </p>
//             <p>
//               <strong>Members:</strong> {anime.members}
//             </p>
//             <p>
//               <strong>Favorites:</strong> {anime.favorites}
//             </p>
//             <p>
//               <strong>Genres:</strong>{" "}
//               {anime.genres?.map((g) => g.name).join(", ") || "N/A"}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AnimeModal;

import React from "react";
import "../index.css"; // Import the CSS file

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
              {anime.synopsis.substring(0, 200) || "No synopsis available."}...
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
