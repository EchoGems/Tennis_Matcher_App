import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, Collapse, Brand, Toggle, Header, MenuItem} from 'react-bootstrap'

export default class NavBar extends Component {

    render() {
        return (
          <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Tennis Love</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/users/sign_in">Sign in</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/users/sign_up">Sign up</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/publics/about">About</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

      )
      }
    }
