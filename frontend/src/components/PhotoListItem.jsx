import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

// Component to display a single photo item
const PhotoListItem = ({ photo, isFavorite, toggleFavorites, openModal }) => {

  // Handle click to open photo details modal
  const handleClick = () => {
    openModal(photo);
  };

  return (
    <article className="photo-list__item">
      <header>
        <PhotoFavButton
          photoId={photo.id}
          isFavorite={isFavorite}
          toggleFavorites={toggleFavorites}
        />

        <img src={photo.urls.regular}
          alt={`${photo.user.username}'s photo`}
          className="photo-list__image"
          onClick={handleClick} />

      </header>
      <section className="photo-list__user-details">

        <img src={photo.user.profile}
          alt={`${photo.user.username}'s profile`}
          className="photo-list__user-profile" />

        <section className="photo-list__user-info">
          <p>{photo.user.name}</p>
          <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
        </section>

      </section>
    </article>
  );
};

export default PhotoListItem;
