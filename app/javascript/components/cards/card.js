import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, Collapse, Brand, Toggle, Header, MenuItem} from 'react-bootstrap'

export default class Card extends Component {

    render() {
        return (
          <div className="card text-white bg-info mb-3">
            <div>
               <img className="card-img" src="https://images.unsplash.com/photo-1511968410596-41f6437a0bbe?auto=format&fit=crop&w=967&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Card image"/>
              <div className="card-img-overlay">
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>


      )
      }
    }
