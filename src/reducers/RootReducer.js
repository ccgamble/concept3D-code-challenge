import { combineReducers } from 'redux';
import CurrentCoords from './CurrentCoordsReducer';
import Locations from './LocationsReducer';
import Polygon from './PolygonReducer';
import PointerCoords from './PointerCoordsReducer'

const RootReducer = combineReducers({
  CurrentCoords,
  Locations,
  PointerCoords,
  Polygon
});

export default RootReducer;
