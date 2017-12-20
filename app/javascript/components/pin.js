import React from 'react';
import MapPin from 'react-icons/lib/fa/map-pin';

const PinStyles = {
  fontSize: '24px',
  color: 'red'
}

const TooltipStyles = {
  border: '1px solid red',
  backgroundColor: 'white',
  color: "black",
  padding: '6px',
  position: 'absolute',
  bottom: '0px',
  width: '100px'
}

export default class Pin extends React.Component {
  render(){
    return(
      <div>
        {this.props.$hover &&
          <div style={TooltipStyles}>{this.props.name.replace(/_/g, " ")}</div>
        }
        <div style={PinStyles}><MapPin /></div>
      </div>
    )
  }
}
