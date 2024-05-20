import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

// Component for the top navigation bar
const TopNavigation = ({ topics, favorites, fetchPhotosByTopic }) => {
  const isFavPhotoExist = favorites.length > 0;

  // Handle click to fetch photos by topic
  const handleTopicClick = (topicId) => {
    fetchPhotosByTopic(topicId);
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={handleTopicClick} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;