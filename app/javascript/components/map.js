import React from 'react';
import GoogleMap from 'google-map-react';
import Pin from './pin.js'
export default class Map extends React.Component {
  render() {
    return (
      <div>
        <div className={"map-title"}>
        <h2>
          SD Court locations
        </h2>
        </div>
        <div style={{width: '400px', height: '400px', border: "solid #fff 5px"}}>
          <GoogleMap
            bootstrapURLKeys={{key: this.props.googleApiKey}}
            center={this.props.center}
            zoom={this.props.zoom}
          >
          {this.props.pins.map((pinProps)=>{
            return <Pin key={pinProps.name} {...pinProps} />
          })}
          </GoogleMap>
        </div>
      </div>
    )
  }
}
