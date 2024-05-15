import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  return (
    <article className="photo-list__item">
      <img src={photo.imageSource} alt={`${photo.username}'s photo`} className="photo-list__image"  />
      <section className="photo-list__user-details">
        <img src={photo.profile} alt={`${photo.username}'s profile`} className="photo-list__user-profile" />
        <section className="photo-list__user-info">
          <p>{photo.username}</p>
          <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
        </section>
      </section>
    </article>
  );
};

export default PhotoListItem;
