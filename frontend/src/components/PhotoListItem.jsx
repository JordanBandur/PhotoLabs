import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  return (
    <article id={photo.id}>
      <img src={photo.imageSource} />
      <img src={photo.profile} />
      <p>{photo.username}</p>
      <p>{photo.location.city}, {photo.location.country}</p>
    </article>
  );
};

PhotoListItem.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PhotoListItem;
