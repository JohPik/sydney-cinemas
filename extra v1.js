/* BEFORE INSTALL*/
import React, { Component } from 'react'

class Map extends Component {

  /* manage async callback from googAPI*/
  componentDidMount(){
    this.renderMap()
  }

  /* render the map*/
  renderMap(){
    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCuGxStq3mHtzeuhtOS0wRxgg5mYeP04RM&callback=initMap')
    window.initMap = this.initMap
  }

  /*control elements on the map*/
  initMap () {
    let sydney = {lat: -27.470125, lng: 153.021072}
    const map = new window.google.maps.Map(document.getElementById('map'), {zoom: 4, center: sydney})
    //let marker = new window.google.maps.Marker({position: sydney, map: map});
    console.log("map is rendered")
  }

  clearMarkers(){
    let sydney = {lat: -27.470125, lng: 153.021072}
    const map = new window.google.maps.Map(document.getElementById('map'), {zoom: 4, center: sydney})
    let marker = new window.google.maps.Marker({position: sydney, map: map});
    console.log("clearMarkers");
  }
  showMarkers(){
    console.log("clearMarkers");
  }
  deleteMarkers(){
    console.log("clearMarkers");
  }

  render() {
    console.log(this.props);
    return(
      <div className="map-section">
        <h2>map Section</h2>

          <div id="floating-panel">
            <button onClick={this.clearMarkers}>Hide Markers</button>
            <button onClick={this.showMarkers}>Show All Markers</button>
            <button onClick={this.deleteMarkers}>Delete Markers</button>

          </div>
        <div id="map"></div>
      </div>
    )
  }
}

/* The following function insert the GoogleMap script Tag in the DOM*/
const loadScript = url => {
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
  console.log("map is called");
}


export default Map