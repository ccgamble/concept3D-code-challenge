/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllMarkers from '../components/AllMarkers'
import * as actions from '../actions/locationActions';

const mapStateToProps = (state) => {
  return { locations: state.Locations.data }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPolygonCoords: (coords) => {
      dispatch(actions.setPolygonCoords(coords));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMarkers);
