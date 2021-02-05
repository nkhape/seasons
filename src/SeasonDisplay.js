import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'summer' : 'winter';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === 'winter' ? 'Ice, ice, baby ❄️' : 'I need me some vitamin sea ☀️🌊';
  const icon = season === 'winter' ? 'sun outline' : 'snowflake outline';

  return (
      <div>
        <i className={`spinner ${icon} icon`}/>
        <h1>{text}</h1>
        <i className={`spinner ${icon} icon`}/>
      </div>
    );
};

export default SeasonDisplay;
