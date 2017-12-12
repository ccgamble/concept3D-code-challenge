import React, { Component } from 'react';
import LeafletMap from './LeafletMap';
import FormContainer from '../containers/Form';

class App extends Component {
  componentDidMount() {
    this.getLocations();
  }

  getLocations() {
    this.props.fetchAllLocations();
  }

  render() {
    let { locations, polygonCoords } = this.props

    return (
      <div className="App">
        <FormContainer />
        <LeafletMap 
          locations={locations}
          polygonCoords={polygonCoords}
        />
      </div>
    );
  }
}

export default App;
