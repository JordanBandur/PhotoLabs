import React, { useState } from 'react';
import photos from "mocks/photos";
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useModal from 'hooks/useModal';
import './App.scss';

const App = () => {
  const { isModalOpen, selectedPhoto, openModal, closeModal } = useModal();
  const [favorites, setFavorites] = useState([]);

  const toggleFavorites = (photoId) => {
    if (!photoId) {
      console.error('Invalid photoId:', photoId);
      return;
    }

    setFavorites((prev) =>
      prev.includes(photoId) ? prev.filter((id) => id !== photoId) : [...prev, photoId]);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos}
        topics={topics}
        openModal={openModal}
        toggleFavorites={toggleFavorites}
        favorites={favorites}
      />
      <PhotoDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        photo={selectedPhoto}
        favorites={favorites}
        toggleFavorites={toggleFavorites}
        openModal={openModal}
      />
    </div>
  );
};

export default App;
