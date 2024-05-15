import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <section id={props.id}>
      <img src={props.imageSource}/>
      <img src={props.profile} />
      <p>{props.username}</p>
      <p>{props.location.city}, {props.location.country}</p>
    </section>

  );
};

export default PhotoListItem;
