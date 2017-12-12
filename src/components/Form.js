import React, { Component } from 'react';


class Form extends Component {
  submitForm(e, data) {
    let validData = this.validateData(data)
    e.preventDefault();
    if (validData) {
      this.props.onSaveLocation(data);
    }
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
            ref={(input) => { this.lat = input }}
            type="text"
          />
        </label>
        <label>
          Lon
          <input
            ref={(input) => { this.lng = input }}
            type="text"/>
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
      </form>
    );
  }
}


export default Form;
