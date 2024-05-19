import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, openModal, toggleFavorites, favorites, fetchPhotosByTopic }) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorites={favorites} fetchPhotosByTopic={fetchPhotosByTopic} />
      <PhotoList
        photos={photos}
        favorites={favorites}
        toggleFavorites={toggleFavorites}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
