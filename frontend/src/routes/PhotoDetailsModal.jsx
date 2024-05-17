import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ isOpen, onClose, photo }) => {
  if (!isOpen || !photo) {
    return null;
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <img src={photo.urls.regular} alt={photo.title} className="photo-details-modal__image" />
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
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
