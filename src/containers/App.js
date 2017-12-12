import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../style/App.css';
import * as actions from '../actions/locationActions';
import App from '../components/App';

const mapStateToProps = (state) => {
  return { 
    locations: state.Locations.data,
    polygonCoords: state.Polygon
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllLocations: (coords) => {
      dispatch(actions.fetchAllLocations(coords));
    },
    setCurrentCoords: (coords) => {
      dispatch(actions.setCurrentCoords(coords));
    },
    setPointerCoords: (coords) => {
      dispatch(actions.setPointerCoords(coords));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
