import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, Collapse, Brand, Toggle, Header, MenuItem} from 'react-bootstrap'

export default class Card2 extends Component {

  render() {
    var divStyle = {
      width: "40rem",
      height: "25rem",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPositionY:"bottom",
      backgroundPositionX: "center",
      backgroundImage: 'url("https://images.unsplash.com/photo-1511968410596-41f6437a0bbe?auto=format&fit=crop&w=967&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")'
    }
      return (
        <div style={divStyle} id="card-1"className="card text-white bg-info mb-3">
          <div className="card-content">
            <h4 className="card-title">Find a Court</h4>
            <p className="card-text">Locate tennis courts that are convenient for both of you.</p>
          </div>
        </div>


    )
    }
  }
