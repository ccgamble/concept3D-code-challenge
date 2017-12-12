import React, { Component } from 'react';


class Form extends Component {
  clearInputs() {
    this.name.value = "";
    this.lat.value = "";
    this.lng.value = "";
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.currentCoords !== this.props.currentCoords) {
      this.setInputs(this.props.currentCoords)
    }
  }
  
  setInputs(coords) {
    document.getElementById('latInput').value = Number(coords.lat).toFixed(6)
    document.getElementById('lngInput').value = Number(coords.lng).toFixed(6)
  }

  submitForm(e, data) {
    let validData = this.validateData(data)
    e.preventDefault();
    if (validData) {
      this.props.saveLocation(data);
    }
    this.clearInputs()
  }
  
  validateData(data) {
    if (!data.name) {
      alert("Please enter a name for the location.")
    } else {
      var validName = true;
    }
    if( Number(data.lat) > 90 || Number(data.lat) < -90 || !data.lat ) {
      alert("Please enter a valid latitude.")
    } else {
      var validLat = true;
    }
    if( Number(data.lng) > 180 || Number(data.lng) < -180 || !data.lng ) {
      alert("Please enter a valid longitude.")
    } else {
      var validLng = true;
    }
    if (validName && validLat && validLng) {
      return data
    }
  }
  
  render() {
    let { currentCoords, pointerCoords } = this.props
    let pointerLat = (pointerCoords.lat) ? Number(pointerCoords.lat).toFixed(6) : ''
    let pointerLng = (pointerCoords.lng) ? Number(pointerCoords.lng).toFixed(6) : ''
    
    return (
      <form className="form">
        <label>
          Name
          <input
            ref={(input) => { this.name = input }}
            type="text"
          />
        </label>
        <label>
          Lat
          <input
            id="latInput"
            ref={(input) => { this.lat = input }}
            type="text"
          />
        </label>
        <label>
          Lon
          <input
            id="lngInput"
            ref={(input) => { this.lng = input }}
            type="text"
            />
        </label>
        <button
          type="submit"
          onClick={(e) => this.submitForm(e, {
            name: this.name.value,
            lat: this.lat.value,
            lng: this.lng.value
          })}
        >
            Save
        </button>
        <button onClick={()=>this.clearInputs()}>Clear Inputs</button>
        <div className="coordinates-display">
         <h3>Pointer Coordinates</h3>
         <p>Latitutde: {pointerLat}</p>
         <p>Longitude: {pointerLng}</p>
         <p className="display-description">*Click on map to set form inputs to current coordinates</p>
       </div>

      </form>
    );
  }
}


export default Form;
