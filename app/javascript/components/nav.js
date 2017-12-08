import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, Collapse, Brand, Toggle, Header, MenuItem} from 'react-bootstrap'

export default class NavBar extends Component {

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
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <a className="nav-link" href="/users/sign_in">Sign In</a>
                <a className="nav-link" href="/users/sign_up">Sign Up</a>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

      )
      }
    }
