import { combineReducers } from 'redux';
import Locations from './LocationsReducer';
import Polygon from './PolygonReducer';

const RootReducer = combineReducers({
  Locations,
  Polygon
});

export default RootReducer;
