import { connect } from 'react-redux'
import Form from '../components/Form'
import * as actions from '../actions/locationActions';

const mapStateToProps = (state) => {
  return { 
    pointerCoords: state.PointerCoords.coords,
    currentCoords: state.CurrentCoords.coords
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveLocation: (location) => {
      dispatch(actions.saveLocation(location));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
