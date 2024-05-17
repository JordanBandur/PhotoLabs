import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
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
