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

// Object storing various actions to be used by reducer
const actionHandlers = { 
  [ActionTypes.TOGGLE_FAVORITE]: (state, action) => {
    const photoExists = state.photos.some(photo => photo.id === action.photoId);
    if (!photoExists) {
      return { ...state, error: 'Invalid photoId. Please try again.' };
    }
    const favorites = state.favorites.includes(action.photoId)
      ? state.favorites.filter(id => id !== action.photoId)
      : [...state.favorites, action.photoId];
    return { ...state, favorites, error: null };
  },
  [ActionTypes.OPEN_MODAL]: (state, action) => ({
    ...state, isModalOpen: true, selectedPhoto: action.photo
  }),
  [ActionTypes.CLOSE_MODAL]: (state) => ({
    ...state, isModalOpen: false, selectedPhoto: null
  }),
};

const reducer = (state, action) => {

  // Using object lookup
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;

  // Using switch
  /*  switch (action.type) {
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
       throw new Error(`Unsupported action type: ${action.type}`);
   } */
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
