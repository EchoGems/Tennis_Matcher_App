import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, Collapse, Brand, Toggle, Header, MenuItem} from 'react-bootstrap'

export default class NavBar_signed_in extends Component {

    render() {
        return (
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Tennis Love</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href="/publics/about">About</a>
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                  <MenuItem><a className="nav-link" href="/publics/profile">Profile Page</a></MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                  <a className="nav-link" href="/users/sign_out" data-method="delete">Sign Out</a>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

      )
      }
    }
