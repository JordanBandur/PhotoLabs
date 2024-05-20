import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

// Component to display the details of a photo in a modal
const PhotoDetailsModal = ({ isOpen, onClose, photo, favorites, toggleFavorites, openModal }) => {
  // If the modal is not open or there is no selected photo, return null (do not render anything)
  if (!isOpen || !photo) {
    return null;
  }

  // Check if the current photo is in the list of favorites
  const isFavorite = favorites.includes(photo.id);

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          photoId={photo.id}
          isFavorite={isFavorite}
          toggleFavorites={toggleFavorites}
        />
        <img
          src={photo.urls.full}
          alt={`${photo.user.username}'s photo`}
          className="photo-details-modal__image"
        />
        <div className="photo-details-modal__photographer-details">
          <img
            src={photo.user.profile}
            alt={`${photo.user.username}'s profile`}
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <p>{photo.user.name}</p>
            <p className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </p>
          </div>
        </div>
        <h2 className="photo-details-modal__header">Similar Photos</h2>
        <div className="photo-details-modal__similar-photos">
          <PhotoList
            photos={Object.values(photo.similar_photos)}
            favorites={favorites}
            toggleFavorites={toggleFavorites}
            openModal={openModal}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
