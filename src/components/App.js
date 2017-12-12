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
    let { locations, polygonCoords, setCurrentCoords, setPointerCoords } = this.props

    return (
      <div className="App">
        <FormContainer />
        <LeafletMap 
          locations={locations}
          polygonCoords={polygonCoords}
          setPointerCoords={setPointerCoords}
          setCurrentCoords={setCurrentCoords}
        />
      </div>
    );
  }
}

export default App;
