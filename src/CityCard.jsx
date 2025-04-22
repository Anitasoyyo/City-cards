import React from "react";
import { FaComment, FaHeart } from "react-icons/fa";
import "./CityCard.css";

function CityCard({
  cityName,
  tagline,
  description,
  imageUrl,
  commentsCount = 0, // podría dar error si no lo inicializamos con un valor
  likesCount = 0,
}) {
  return (
    <div className="city-card">
      <img src={imageUrl} alt={cityName} className="city-image" />
      <div className="city-content">
        <h2 className="city-title">{cityName}</h2>
        <p className="city-tagline">{tagline}</p>
        <p className="city-description">{description}</p>
        <button className="city-button">Leer artículo</button>
        <div className="city-stats">
          <span className="city-stat">
            <FaComment className="city-icon" /> {commentsCount} comentarios
          </span>
          <span className="city-stat">
            <FaHeart className="city-icon city-icon-heart" /> {likesCount} likes
          </span>
        </div>
      </div>
    </div>
  );
}

export default CityCard;
