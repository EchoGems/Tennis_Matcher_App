import React from 'react';
import GoogleMap from 'google-map-react';
import Pin from './pin.js'
export default class Map extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Check out the court locations:
        </h2>
        <div style={{width: '500px', height: '500px'}}>
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
