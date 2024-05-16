import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({topic}) => {
  return (
    <div className="topic-list__item">
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
