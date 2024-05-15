import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  return (
    <section id={photo.id}>
      <img src={photo.imageSource} />
      <img src={photo.profile} />
      <p>{photo.username}</p>
      <p>{photo.location.city}, {photo.location.country}</p>
    </section>
  );
};

export default PhotoListItem;
