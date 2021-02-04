import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // FIRST method called any time an instance of a class is created in JS
  constructor(props) {
    // reference to the parent's constructor function
    super(props);

    this.state = {lat: null, };
  }
  // React makes us always define "render"
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
      );
    return <div>Latitude: </div>;
  }
};

ReactDOM.render(<App />, document.querySelector("#root"));
