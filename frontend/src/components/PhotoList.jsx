import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

// Component to display a list of photos
const PhotoList = ({ photos, favorites, toggleFavorites, openModal }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavorite={favorites.includes(photo.id)}
          toggleFavorites={toggleFavorites}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
