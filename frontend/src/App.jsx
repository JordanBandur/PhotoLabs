import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {

  const {
    photos,
    topics,
    isModalOpen,
    selectedPhoto,
    openModal,
    closeModal,
    favorites,
    toggleFavorites,
    error,
  } = useApplicationData();

  return (
    <div className="App">
      {error && <div className="error">{error}</div>}
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
