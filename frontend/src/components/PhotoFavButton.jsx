import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

// Component for the favorite button on each photo
function PhotoFavButton({ photoId, isFavorite, toggleFavorites }) {

  // Handle click to toggle favorite status
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