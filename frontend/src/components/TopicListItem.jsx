import React from "react";
import "../styles/TopicListItem.scss";

// Component to display a single topic item
const TopicListItem = ({ topic, onTopicClick }) => {

  // Handle click to fetch photos by topic
  const handleClick = () => {
    onTopicClick(topic.id);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
