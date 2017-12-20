import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, Collapse, Brand, Toggle, Header, MenuItem} from 'react-bootstrap';

export default class Card extends Component {
  render() {
    return (
      <div id="card-1" className="card text-white bg-info mb-3">
        <div className="card-content">
          <h4 className="card-title">Find a Partner</h4>
          <p></p>
          <p className="card-text">
            Find a tennis player in your local San Diego area
          </p>
        </div>
      </div>
    )
  }
}
