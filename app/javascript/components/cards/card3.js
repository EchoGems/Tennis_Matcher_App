import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, Collapse, Brand, Toggle, Header, MenuItem} from 'react-bootstrap'

export default class Card3 extends Component {

    render() {
      var divStyle = {
        width: "40rem",
        height: "25rem",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY:"bottom",
        backgroundPositionX: "center",
        backgroundImage:'url("https://images.unsplash.com/37/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")'
      }
        return (
          <div style={divStyle} id="card-1"className="card text-white bg-info mb-3">
            <div className="card-content">
              <h4 className="card-title">Schedule a Match</h4>
              <p></p>
              <p className="card-text">Schedule your match and get prepared to play!</p>
            </div>
          </div>
      )
      }
    }
