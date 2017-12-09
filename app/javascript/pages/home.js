import React, {Component} from 'react';
// import Nav from 'pages/nav.js'
import PropTypes from 'prop-types';
import {Router, Route} from 'react-router';
import {Jumbotron, Button, Carousel, Item, Caption} from 'react-bootstrap'


export default class Home extends Component {

    render() {
        return (
            <div className={"admin"}>
              <div className="jumbotron jumbotron-billboard">
                <div className="img"></div>
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                            <br />
                            <h1>It starts with LOVE</h1>
                              <p>Find fellow SD tennis players in San Diego and set up a time and place to play!</p>
                              <a href="publics/about" className="btn btn-info">Learn More </a>
                          </div>
                      </div>
                  </div>
                </div>
              <Carousel>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="/assets/Serena.jpg" />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="/assets/nadal.jpg" />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="/assets/maria.jpeg" />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
        )
    }
}
