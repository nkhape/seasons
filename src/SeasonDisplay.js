import React from 'react';


const seasonConfig = {
  summer: {
    text: 'I need me some vitamin sea ☀️🌊',
    iconName: 'sun outline'
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
      <div>
        <i className={`spinner ${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`spinner ${iconName} icon`}/>
      </div>
    );
};

export default SeasonDisplay;
