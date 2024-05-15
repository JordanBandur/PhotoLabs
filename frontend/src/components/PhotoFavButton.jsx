import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavClick = () => {
    setIsFavorite(!isFavorite);
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