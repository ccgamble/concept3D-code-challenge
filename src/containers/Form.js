import { connect } from 'react-redux'
import Form from '../components/Form'
import * as actions from '../actions/locationActions';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveLocation: (location) => {
      dispatch(actions.saveLocation(location));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
