import React from 'react';

const RecommendationPlace = ({ place }) => {
  return (
    <div>
      <div>{place.title}</div>
      <div>{place.image}</div>
      <div>{place.location}</div>
    </div>
  );
};

export default RecommendationPlace;
