import './SeasonDisplay.css'
import React from 'react';


const seasonConfig = {
  summer: {
    text: 'Time for some vitamin sea ☀️🌊',
    iconName: 'sun'
  },
  winter: {
    text: 'Ice, ice, baby ❄️',
    iconName: 'snowflake outline'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left spinner huge ${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`icon-right spinner huge ${iconName} icon`}/>
      </div>
    );
};

export default SeasonDisplay;
