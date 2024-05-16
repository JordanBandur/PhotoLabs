import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photo }) => {
  return (
    <article className="photo-list__item">
      <header>
      <PhotoFavButton />
      <img src={photo.urls.regular} alt={`${photo.user.username}'s photo`} className="photo-list__image" />
      </header>
      <section className="photo-list__user-details">
        <img src={photo.user.profile} alt={`${photo.user.username}'s profile`} className="photo-list__user-profile" />
        <section className="photo-list__user-info">
          <p>{photo.user.username}</p>
          <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
        </section>
      </section>
    </article>
  );
};

export default PhotoListItem;
