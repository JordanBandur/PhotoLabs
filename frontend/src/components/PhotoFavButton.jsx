import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, isFavorite, toggleFavorites }) {

  const handleFavClick = () => {
    toggleFavorites(photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleFavClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;