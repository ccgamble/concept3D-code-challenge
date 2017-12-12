/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapMarker from './Marker'

class AllMarkers extends Component {
  render() {
    let { locations, setPolygonCoords } = this.props
    
    const markerArray = locations.map((marker, i) => {
      return (
        <MapMarker
          key={i}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
          setPolygonCoords={setPolygonCoords}
        />
      )
    })

    return (
      <div className="paths-container">
        {markerArray}
      </div>
    );
  }
}

export default AllMarkers;
