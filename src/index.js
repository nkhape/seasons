import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // FIRST method called any time an instance of a class is created in JS
  constructor(props) {
    // reference to the parent's constructor function
    super(props);
    // this is the ONLY time we do a direct assignment to this.state!
    this.state = {lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // state can only be updated by calling the function setState()!
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
      );
  }
  // React makes us always define "render"
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading...⏳ </div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
