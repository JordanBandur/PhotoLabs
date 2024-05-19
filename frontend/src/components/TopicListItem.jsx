import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onTopicClick }) => {

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
