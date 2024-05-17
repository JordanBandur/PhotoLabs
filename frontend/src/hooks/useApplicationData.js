import { useState } from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useModal from './useModal';

const useApplicationData = () => {
  const { isModalOpen, selectedPhoto, openModal, closeModal } = useModal();
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(null);

  const toggleFavorites = (photoId) => {
    const photoExists = photos.some(photo => photo.id === photoId);
    if (!photoExists) {
      setError('Invalid photoId. Please try again.');
      return;
    }

    setFavorites((prev) =>
      prev.includes(photoId) ? prev.filter((id) => id !== photoId) : [...prev, photoId]
    );
    setError(null);
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
    error,
  };
};

export default useApplicationData;
