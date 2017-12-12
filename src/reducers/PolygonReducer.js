const Polygon = (state = [], action) => {

  switch (action.type) {
    case 'SET_POLYGON_COORDS':
      const index = state.indexOf(action.coords);

      if (index === -1) {
        return state.concat([action.coords]);
      } else {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ]
      }

    default:
      return state;
  }
};

export default Polygon;
