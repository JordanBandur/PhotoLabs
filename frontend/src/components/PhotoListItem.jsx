import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  return (
    <article className="photo-list__item" id={photo.id}>
      <img className="photo-list__image" src={photo.imageSource} />
      <img className="photo-list__user-profile" src={photo.profile} />
      <section className="photo-list__user-details">
        <p className="photo-list__user-info">{photo.username}</p>
        <p className="photo-list__user-info photo-list__user-location ">{photo.location.city}, {photo.location.country}</p>
      </section>
    </article>
  );
};

export default PhotoListItem;
