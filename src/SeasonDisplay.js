import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? '☀️' : '☃️';
  } else {
    return lat > 0 ? '☀️' : '☃️';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);

  return (
      <div>SeasonDisplay is linked!</div>
    );
};

export default SeasonDisplay;
