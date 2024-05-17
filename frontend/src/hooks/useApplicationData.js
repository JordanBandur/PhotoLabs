import { useState } from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useModal from './useModal';

const useApplicationData = () => {
  const { isModalOpen, selectedPhoto, openModal, closeModal } = useModal();
  const [favorites, setFavorites] = useState([]);

  const toggleFavorites = (photoId) => {
    if (!photoId) {
      console.error('Invalid photoId:', photoId);
      return;
    }

    setFavorites((prev) =>
      prev.includes(photoId) ? prev.filter((id) => id !== photoId) : [...prev, photoId]
    );
  };

  return {
    photos,
    topics,
    isModalOpen,
    selectedPhoto,
    openModal,
    closeModal,
    favorites,
    toggleFavorites,
  };
};

export default useApplicationData;
