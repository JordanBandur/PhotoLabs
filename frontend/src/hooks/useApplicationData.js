import { useReducer } from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import { ActionTypes } from 'actions';

const initialState = {
  photos,
  topics,
  isModalOpen: false,
  selectedPhoto: null,
  favorites: [],
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_FAVORITE:
      const photoExists = state.photos.some(photo => photo.id === action.photoId);
      if (!photoExists) {
        return { ...state, error: 'Invalid photoId. Please try again.' };
      }
      const favorites = state.favorites.includes(action.photoId)
        ? state.favorites.filter(id => id !== action.photoId)
        : [...state.favorites, action.photoId];
      return { ...state, favorites, error: null };

    case ActionTypes.OPEN_MODAL:
      return { ...state, isModalOpen: true, selectedPhoto: action.photo };

    case ActionTypes.CLOSE_MODAL:
      return { ...state, isModalOpen: false, selectedPhoto: null };

    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavorites = (photoId) => {
    dispatch({ type: ActionTypes.TOGGLE_FAVORITE, photoId });
  };

  const openModal = (photo) => {
    dispatch({ type: ActionTypes.OPEN_MODAL, photo });
  };

  const closeModal = () => {
    dispatch({ type: ActionTypes.CLOSE_MODAL });
  };

  return {
    ...state,
    toggleFavorites,
    openModal,
    closeModal,
  };
};

export default useApplicationData;
