require('isomorphic-fetch');

const fetchAllLocations = () => {
  return (dispatch) => {
    return fetch('/locations', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(locations => locations.json())
      .then(json => dispatch(storeAllLocations(json.locations)));
  };
};

const saveLocation = (location) => {
  return (dispatch) => {
    return fetch('/locations', {
      method: 'POST',
      body: JSON.stringify(location),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
      .then(location => location.json())
      .then(json => dispatch(storeAllLocations(json)))
  };
};

const setCurrentCoords = (coords) => {
  return {
    type: 'SET_CURRENT_COORDS', 
    coords: coords
  }
}

const setPointerCoords = (coords) => {
  return {
    type: 'SET_POINTER_COORDS', 
    coords: coords
  }
}

const setPolygonCoords = (coords) => {
  return {
    type: 'SET_POLYGON_COORDS', 
    coords: coords
  }
}

const storeAllLocations = (locations) => {
  return {
    type: 'STORE_LOCATIONS',
    data: locations,
  };
};


export { fetchAllLocations, saveLocation, setCurrentCoords, setPointerCoords, setPolygonCoords }
