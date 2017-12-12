const initialState = {
  coords: [],
};

const Locations = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POINTER_COORDS':
      return Object.assign({}, state, {
        coords: action.coords,
      });
    default:
      return state;
  }
};

export default Locations;