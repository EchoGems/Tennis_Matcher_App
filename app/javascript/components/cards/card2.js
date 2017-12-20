import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, Collapse, Brand, Toggle, Header, MenuItem} from 'react-bootstrap';

export default class Card2 extends Component {

  render() {
    return (
      <div id="card-2" className="card text-white bg-info mb-3">
        <div className="card-content">
          <h4 className="card-title">Find a Court</h4>
          <p></p>
          <p className="card-text">Locate tennis courts that are convenient for both of you.</p>
        </div>
      </div>
    )
  }
}
