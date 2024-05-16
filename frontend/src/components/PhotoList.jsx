import React from "react";
import photos from "mocks/photos";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

export default PhotoList;
