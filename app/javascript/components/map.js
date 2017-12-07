import React from 'react';
import GoogleMap from 'google-map-react';
export default class Map extends React.Component {
  render() {
    return (
      <div style={{width: '80%', height: '700px'}}>
        <GoogleMap
          bootstrapURLKeys={{key: 'AIzaSyCsAS0jtTVddtNAwYcrfDhPZziN6F620jA'}}
          center={[32.7096298,-117.1602029]}
          zoom={18}>
        </GoogleMap>
      </div>
    )
  }
}
