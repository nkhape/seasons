import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // FIRST method called any time an instance of a class is created in JS
  constructor(props) {
    // reference to the parent's constructor function
    super(props);
    // this is the ONLY time we do a direct assignment to this.state!
    this.state = {lat: null, errorMessage: "" };

  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
      );
  };

  // React makes us always define "render"
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <div>Loading...⏳ </div>
  }
};

ReactDOM.render(<App />, document.querySelector("#root"));
