import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl, Polygon } from 'react-leaflet';
import AllMarkers from '../containers/AllMarkers'

class LeafletMap extends Component {
  getCenterCoords() {
    if (this.props.locations.length > 3) {
      let location = this.props.locations.slice(-1)[0];
      return [Number(location.lat), Number(location.lng)]
    } else {
      return [39.750809, -104.996810]
    }
  }
  
  showCoordinates(e) {
    let pointerCoords = [e.latlng.lat, e.latlng.lng]
    console.log(pointerCoords)
  }
  
  render() {
    let { polygonCoords } = this.props
    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={this.getCenterCoords()}
          zoom={4}
          maxBounds={[[85, 100], [-85, -280]]}
          onMouseMove={(e) => this.showCoordinates(e)}
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
          <Polygon positions={polygonCoords} />
        </Map>
      </div>
    );
  }
}

export default LeafletMap;
