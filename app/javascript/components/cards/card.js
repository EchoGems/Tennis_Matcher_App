import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, Collapse, Brand, Toggle, Header, MenuItem} from 'react-bootstrap'

export default class Card extends Component {

    render() {
      var divStyle = {
        max-width: 40rem;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url("https://images.unsplash.com/photo-1485908953667-cf6d88997642?auto=format&fit=crop&w=1020&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D");
      }
        return (
          <div id="card-1"className="card text-white bg-info mb-3">
            <div style={divStyle}>
                <h4 className="card-title">Find a Partner</h4>
                <p className="card-text">Find a tennis player in your local San Diego area</p>
              </div>
            </div>
          </div>


      )
      }
    }
