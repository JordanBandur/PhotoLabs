import { useReducer, useEffect } from 'react';
import axios from 'axios';
import { ActionTypes } from 'actions';

// Initial state for the application
const initialState = {
  photos: [],
  topics: [],
  isModalOpen: false,
  selectedPhoto: null,
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  error: null,
};

// Object storing various actions to be used by reducer
const actionHandlers = {
  [ActionTypes.SET_PHOTOS]: (state, action) => ({
    ...state, photos: action.photos
  }),

  [ActionTypes.SET_TOPICS]: (state, action) => ({
    ...state, topics: action.topics
  }),

  [ActionTypes.SET_ERROR]: (state, action) => ({
    ...state, error: action.error
  }),

  // Action to toggle favorite status of a photo
  [ActionTypes.TOGGLE_FAVORITE]: (state, action) => {
    const photoExists = state.photos.some(photo => photo.id === action.photoId);
    if (!photoExists) {
      return { ...state, error: 'Invalid photoId. Please try again.' };
    }

    const favorites = state.favorites.includes(action.photoId)
      ? state.favorites.filter(id => id !== action.photoId)
      : [...state.favorites, action.photoId];
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return { ...state, favorites, error: null };
  },

  [ActionTypes.OPEN_MODAL]: (state, action) => ({
    ...state, isModalOpen: true, selectedPhoto: action.photo
  }),

  [ActionTypes.CLOSE_MODAL]: (state) => ({
    ...state, isModalOpen: false, selectedPhoto: null
  }),

  [ActionTypes.SET_PHOTOS_BY_TOPIC]: (state, action) => ({
    ...state, photos: action.photos
  }),
};

// Reducer function to manage state based on actions
const reducer = (state, action) => {
  // Using object lookup for action handlers
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
};

// Custom hook to manage application data
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch initial data (photos and topics) when the component mounts
  useEffect(() => {
    axios.get('/api/photos')
      .then(response => {
        dispatch({ type: ActionTypes.SET_PHOTOS, photos: response.data });
      })
      .catch(error => {
        dispatch({ type: ActionTypes.SET_ERROR, error: 'Failed to fetch photos' });
      });

    axios.get('/api/topics')
      .then(response => {
        const topicsWithAll = [{ id: null, title: 'All', slug: 'all' }, ...response.data];
        dispatch({ type: ActionTypes.SET_TOPICS, topics: topicsWithAll });
      })
      .catch(error => {
        dispatch({ type: ActionTypes.SET_ERROR, error: 'Failed to fetch topics' });
      });
  }, []);

  // Function to fetch photos by topic
  const fetchPhotosByTopic = (topicId) => {
    if (topicId === null) { // Fetch all photos
      axios.get('/api/photos')
        .then(response => {
          dispatch({ type: ActionTypes.SET_PHOTOS, photos: response.data });
        })
        .catch(error => {
          dispatch({ type: ActionTypes.SET_ERROR, error: 'Failed to fetch photos' });
        });
    } else { // Fetch photos for a specific topic
      axios.get(`/api/topics/photos/${topicId}`)
        .then(response => {
          dispatch({ type: ActionTypes.SET_PHOTOS_BY_TOPIC, photos: response.data });
        })
        .catch(error => {
          dispatch({ type: ActionTypes.SET_ERROR, error: 'Failed to fetch photos for the topic' });
        });
    }
  };

  const toggleFavorites = (photoId) => {
    dispatch({ type: ActionTypes.TOGGLE_FAVORITE, photoId });
  };

  const openModal = (photo) => {
    if (photo.similar_photos) {
      dispatch({ type: ActionTypes.OPEN_MODAL, photo });
    } else {
      const similarPhotos = state.photos.filter(p => p.topic_id === photo.topic_id && p.id !== photo.id).slice(0, 8);
      photo.similar_photos = similarPhotos;
      dispatch({ type: ActionTypes.OPEN_MODAL, photo });
    }
  };

  const closeModal = () => {
    dispatch({ type: ActionTypes.CLOSE_MODAL });
  };

  return {
    ...state,
    fetchPhotosByTopic,
    toggleFavorites,
    openModal,
    closeModal,
  };
};

export default useApplicationData;
