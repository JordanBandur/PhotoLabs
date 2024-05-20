import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {

  const {
    photos,              // Array of photos
    topics,              // Array of topics
    isModalOpen,         // Boolean indicating if the modal is open
    selectedPhoto,       // The currently selected photo for the modal
    openModal,           // Function to open the modal
    closeModal,          // Function to close the modal
    favorites,           // Array of favorite photo IDs
    toggleFavorites,     // Function to toggle favorite status of a photo
    fetchPhotosByTopic,  // Function to fetch photos by topic
    error,               // Error message, if any
  } = useApplicationData();

  return (
    <div className="App">
      {error && <div className="error">{error}</div>}

      <HomeRoute photos={photos}
        topics={topics}
        openModal={openModal}
        toggleFavorites={toggleFavorites}
        favorites={favorites}
        fetchPhotosByTopic={fetchPhotosByTopic}
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
