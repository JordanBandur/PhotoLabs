import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

// Component to display a list of topics
const TopicList = ({ topics, onTopicClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} onTopicClick={onTopicClick} />
      ))}
    </div>
  );
};

export default TopicList;