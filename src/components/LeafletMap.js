import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';
import AllMarkers from '../containers/AllMarkers'

class LeafletMap extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  
  getCenterCoords() {
    if (this.props.locations.length > 3) {
      let location = this.props.locations.slice(-1)[0];
      return [Number(location.lat), Number(location.lng)]
    } else {
      return [39.750809, -104.996810]
    }
  }
  
  render() {
    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={this.getCenterCoords()}
          zoom={4}
          maxBounds={[[85, 100], [-85, -280]]}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            maxZoom={10}
            minZoom={2}
          />
          <ZoomControl
            position="bottomright"
          />
          <AllMarkers />
        </Map>
      </div>
    );
  }
}

export default LeafletMap;
