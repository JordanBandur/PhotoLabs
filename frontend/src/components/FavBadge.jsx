import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

// Component to display a favorite badge
const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;