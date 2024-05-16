import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorites = (photoId) => {
    setFavorites((prev) =>
      prev.includes(photoId) ? prev.filter((id) => id !== photoId) : [...prev, photoId]);
  };

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} />
      <PhotoList
        photos={props.photos}
        favorites={favorites}
        toggleFavorite={toggleFavorites} />
    </div>
  );
};

export default HomeRoute;
