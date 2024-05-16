import React from "react";
import topics from "mocks/topics";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

export default TopicList;