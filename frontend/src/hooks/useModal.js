import { useState } from 'react';

// Custom hook to manage modal state
const useModal = () => {
  // State to track if the modal is open
  const [isModalOpen, setModalOpen] = useState(false);
  // State to track the currently selected photo in the modal
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalOpen(false);
  };

  return {
    isModalOpen,
    selectedPhoto,
    openModal,
    closeModal,
  };
};

export default useModal;
