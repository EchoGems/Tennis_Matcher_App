import React from 'react';
import GoogleMap from 'google-map-react';
import Pin from './pin.js'
export default class Map extends React.Component {
  render() {
    return (
      <div style={{width: '80%', height: '700px'}}>
        <GoogleMap
          bootstrapURLKeys={{key: this.props.googleMapsApiKey}}
          center={this.props.center}
          zoom={this.props.zoom}
        >
        {this.props.pins.map((pinProps)=>{
          return <Pin key={pinProps.name} {...pinProps} />
        })}
        </GoogleMap>
      </div>
    )
  }
}
