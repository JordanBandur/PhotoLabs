import React from 'react';
import photos from "mocks/photos";
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useModal from 'hooks/useModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { isModalOpen, selectedPhoto, openModal, closeModal } = useModal();

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} openModal={openModal} />
      <PhotoDetailsModal isOpen={isModalOpen} onClose={closeModal} photo={selectedPhoto} />
    </div>
  );
};

export default App;
